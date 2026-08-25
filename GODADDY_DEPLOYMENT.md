# Deploying on GoDaddy Node.js Hosting

This project runs as a Node.js server, including server-side rendering and the quote/enterprise email forms.

1. In GoDaddy cPanel, create a **Node.js Application** using Node.js 20 or newer.
2. Upload the project files to the application root, excluding local-only folders such as `node_modules`, `.git`, and `.env`.
3. In the application's terminal, run:

   ```sh
   npm install
   npm run build
   ```

4. Set the startup file to `app.js` (or set the startup command to `npm start` if the panel asks for a command), then restart the application.
5. Add these environment variables in GoDaddy's Node.js application settings and restart it:

   ```text
   RESEND_API_KEY=...
   RESEND_FROM_EMAIL=Om Roadlines <info@omroadlines.com>
   ```

Do not set `PORT`; GoDaddy provides it automatically. The server binds to that value and listens on all network interfaces.

After a source-code update, run `npm run build` again before restarting the application. The generated `dist` directory must remain on the server because `app.js` runs the compiled application from it.
