# Zedrent Web App

Buyer-focused real-estate web application built with Next.js 14, TypeScript and Tailwind CSS.

## Requirements
- Node.js 18.17+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Important implementation notes
- The web experience is for buyers. Agent accounts are routed to `/agent-redirect`.
- This is a frontend project. It includes typed API service boundaries and demo data; no production backend, payment processor, authentication provider, map key, or real-time server is included.
- Checkout and payment screens are demonstrations only. Do not enter real payment credentials.
- Replace demo service implementations in `src/services` with your backend endpoints before production.
- Add your real App Store and Play Store URLs to `src/lib/config.ts`.
