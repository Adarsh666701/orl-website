/**
 * Production entry point for Node.js hosts such as GoDaddy cPanel.
 * Build the app first with `npm run build`, then launch with `npm start`.
 */
import http from "node:http";
import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

import app from "./dist/server/server.js";

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
const clientDirectory = path.join(rootDirectory, "dist", "client");
const port = Number.parseInt(process.env.PORT ?? "3000", 10) || 3000;
const host = "0.0.0.0";

const mimeTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function contentType(filePath) {
  return mimeTypes[path.extname(filePath).toLowerCase()] ?? "application/octet-stream";
}

function clientFilePath(pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return undefined;
  }

  const filePath = path.resolve(clientDirectory, `.${decodedPath}`);
  return filePath.startsWith(`${clientDirectory}${path.sep}`) ? filePath : undefined;
}

async function serveStaticFile(request, response, pathname) {
  if (request.method !== "GET" && request.method !== "HEAD") return false;

  const filePath = clientFilePath(pathname);
  if (!filePath || !existsSync(filePath)) return false;

  const fileStats = await stat(filePath);
  if (!fileStats.isFile()) return false;

  const immutable = pathname.startsWith("/assets/");
  response.writeHead(200, {
    "Content-Length": fileStats.size,
    "Content-Type": contentType(filePath),
    "Cache-Control": immutable ? "public, max-age=31536000, immutable" : "public, max-age=3600",
  });

  if (request.method === "HEAD") {
    response.end();
  } else {
    await pipeline(createReadStream(filePath), response);
  }
  return true;
}

function requestHeaders(headers) {
  const result = new Headers();
  for (const [name, value] of Object.entries(headers)) {
    if (value === undefined) continue;
    result.set(name, Array.isArray(value) ? value.join(", ") : value);
  }
  return result;
}

async function handleRequest(request, response) {
  const origin = `http://${request.headers.host ?? "localhost"}`;
  const url = new URL(request.url ?? "/", origin);

  if (await serveStaticFile(request, response, url.pathname)) return;

  const method = request.method ?? "GET";
  const body = method === "GET" || method === "HEAD" ? undefined : Readable.toWeb(request);
  const webRequest = new Request(url, {
    method,
    headers: requestHeaders(request.headers),
    body,
    duplex: body ? "half" : undefined,
  });
  const webResponse = await app.fetch(webRequest, process.env, {});
  const headers = Object.fromEntries(webResponse.headers.entries());
  const cookies = webResponse.headers.getSetCookie?.();
  if (cookies?.length) headers["set-cookie"] = cookies;

  response.writeHead(webResponse.status, headers);
  if (!webResponse.body || method === "HEAD") {
    response.end();
    return;
  }
  // Await the stream so SSR timeouts or aborted renders are handled by the
  // request-level error boundary instead of becoming unhandled stream errors.
  await pipeline(Readable.fromWeb(webResponse.body), response);
}

const server = http.createServer((request, response) => {
  handleRequest(request, response).catch((error) => {
    console.error("Unhandled request error", error);
    if (!response.headersSent) response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Internal Server Error");
  });
});

server.listen(port, host, () => {
  console.log(`Om Roadlines is listening on http://${host}:${port}`);
});
