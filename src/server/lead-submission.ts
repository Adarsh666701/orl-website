import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const recipient = "ayush@omroadlines.com";
const from = process.env.RESEND_FROM_EMAIL ?? "Om Roadlines <info@omroadlines.com>";

const quoteSchema = z.object({
  origin: z.string().trim().min(2).max(120),
  destination: z.string().trim().min(2).max(120),
  loadType: z.string().trim().min(2).max(120),
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(6).max(40),
  website: z.string().max(0).optional(),
});

const enterpriseSchema = z.object({
  company: z.string().trim().min(2).max(160),
  volume: z.string().trim().min(2).max(120),
  fleet: z.string().trim().max(160).optional(),
  routes: z.string().trim().min(2).max(300),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(6).max(40),
  message: z.string().trim().max(2_000).optional(),
  website: z.string().max(0).optional(),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function field(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr><td style="padding:8px 16px 8px 0;color:#52606d;font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 0;color:#102a43">${escapeHtml(value)}</td></tr>`;
}

async function sendLead(subject: string, rows: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Email service is not configured.");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "omroadlines.com lead form",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      subject,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px"><h1 style="font-size:20px;color:#071d49">${escapeHtml(subject)}</h1><table style="border-collapse:collapse;width:100%">${rows}</table></div>`,
    }),
  });

  if (!response.ok) {
    console.error("Resend lead delivery failed", response.status, await response.text());
    throw new Error("We couldn't send your request. Please call us instead.");
  }
}

export const submitQuoteLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };
    await sendLead(`New freight quote: ${data.origin} → ${data.destination}`, [
      field("Name", data.name),
      field("Phone", data.phone),
      field("Origin", data.origin),
      field("Destination", data.destination),
      field("Load type", data.loadType),
    ].join(""));
    return { ok: true };
  });

export const submitEnterpriseLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => enterpriseSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };
    await sendLead(`New enterprise inquiry: ${data.company}`, [
      field("Company", data.company),
      field("Email", data.email),
      field("Phone", data.phone),
      field("Monthly volume", data.volume),
      field("Fleet requirement", data.fleet),
      field("Preferred routes", data.routes),
      field("Message", data.message),
    ].join(""));
    return { ok: true };
  });
