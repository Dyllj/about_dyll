This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## SEO and public routes

The site publishes crawlable pages at `/`, `/about`, `/work`, and `/contact`, plus a generated `/sitemap.xml` and `/robots.txt`. Each page has a canonical URL, a unique title and description, and social-sharing metadata. The home page also includes Person and WebSite structured data.

The production origin is configured in `app/seo.ts` as `https://about-dyll.vercel.app`. Update `SITE_URL` there if the production domain changes; canonical links, sitemap URLs, robots metadata, and structured data all use that value. After deployment, verify the site in Google Search Console and submit `https://about-dyll.vercel.app/sitemap.xml`.

## Contact form email setup

The contact form sends directly from the browser through [EmailJS](https://www.emailjs.com/). Complete the EmailJS dashboard setup and configure the environment variables before using the form; otherwise submissions show a configuration error and provide a `mailto:` fallback.

### 1. Connect the email account

1. Create or sign in to your EmailJS account.
2. Open **Email Services** in the [EmailJS dashboard](https://dashboard.emailjs.com/admin).
3. Add a supported provider (for example, Gmail) and follow its authorization steps.
4. Send a test email from the service settings and confirm it reaches the intended inbox.
5. Copy the service ID shown in EmailJS. This becomes `NEXT_PUBLIC_EMAILJS_SERVICE_ID`.

Use an inbox you control. For higher-volume production use, choose a transactional email provider and configure its sending domain and reputation.

### 2. Create the contact template

1. Open **Email Templates** in the [EmailJS dashboard](https://dashboard.emailjs.com/admin/templates) and create a template.
2. Set **To Email** to the recipient inbox. The current contact address is `tautoanwendylljay@gmail.com` in `app/components/contact/content.ts`.
3. Set **From Name** to `{{from_name}}`. Keep **From Email** as the address provided by the connected email service; do not use the visitor's address as the sender.
4. Set **Reply To** to `{{reply_to}}`, so replying to a message goes to the visitor.
5. Use `{{subject}}` for the email subject.
6. Replace the starter template body with a message that follows the website form, for example:

   ```text
   A new {{topic}} message was received through the portfolio contact form.

   Name: {{name}}
   Email: {{email}}
   Topic: {{topic}}

   Message:
   {{message}}

   Sent: {{time}}
   ```

   If you prefer separate name fields, `{{firstName}}` and `{{lastName}}` are also provided. The contact form has one name field, so the first word is sent as `firstName` and the remaining words as `lastName`.

   The form uses `emailjs.send()` and passes template parameters directly. The HTML/JavaScript sample shown by EmailJS for `sendForm()` is not used by this Next.js form; do not paste it into the app.

7. These are the exact variables sent by the form:

   | Template variable | Value |
   | --- | --- |
   | `{{name}}` | Visitor's full name |
   | `{{firstName}}` | First word of the visitor's name |
   | `{{lastName}}` | Remaining words of the visitor's name |
   | `{{email}}` | Visitor's email address |
   | `{{topic}}` | Selected contact topic |
   | `{{message}}` | Visitor's message |
   | `{{time}}` | Submission time in Cebu/Manila time |
   | `{{from_name}}` | Visitor's name |
   | `{{from_email}}` | Visitor's email address |
   | `{{reply_to}}` | Visitor's email address (use this in Reply To) |
   | `{{subject}}` | Generated subject, including topic and visitor name |

8. Save the template, use EmailJS's **Test It** feature with sample values, and copy the template ID.
9. Submit a test through the website after configuring its credentials (step 4 below). Confirm the received email has the expected subject, body, and Reply To address.

### 3. Add credentials for local development

1. Copy `.env.example` to `.env.local` in the repository root:

   ```powershell
   Copy-Item .env.example .env.local
   ```

2. Fill in the three values from EmailJS:

   ```dotenv
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   Find the public key in **Account** / **General** in the EmailJS dashboard. These are public browser credentials; never put an EmailJS private key or provider password in a `NEXT_PUBLIC_` variable or commit real credentials.

3. Keep `.env.local` on your machine only; it is ignored by Git. Restart the dev server after changing environment variables:

   ```powershell
   npm run dev
   ```

4. Open the Contact page, submit a real test with a valid name, email, topic, and message, then confirm receipt in the recipient inbox (check spam/junk too). A green success state means EmailJS accepted the request; inbox receipt is the end-to-end delivery check.

### 4. Configure production deployment

For Vercel:

1. Open the project in the Vercel dashboard and go to **Settings → Environment Variables**.
2. Add `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` with the same values used locally.
3. Select the environments where the form should work (Production, Preview, and/or Development) for each variable.
4. In EmailJS, restrict allowed origins to your production domain and any preview/local origins you actually use. Configure sending limits and abuse protections.
5. Redeploy after adding or changing the variables; Next.js embeds `NEXT_PUBLIC_` values into the browser bundle at build time.
6. Submit a test through the deployed Contact page and confirm the email arrives. Do not treat a successful build or the UI success state alone as proof of inbox delivery.

For another hosting provider, add the same three variables to its build environment and trigger a new production build/deployment.

The contact form also uses EmailJS's browser SDK rate limiter to enforce a 10-second cooldown between send requests in the same browser profile. This is client-side throttling, not a server-side abuse-prevention boundary; keep EmailJS account/provider sending limits enabled for overall protection.

### Troubleshooting

- **“EmailJS isn't configured”**: one or more variables are missing or empty. Check spelling and environment selection, then restart/rebuild.
- **EmailJS rejects the request**: verify the service ID and template ID, that the service is connected, and that your EmailJS account limits allow the request.
- **The form reports success but no email arrives**: check spam/junk, the template's **To Email**, the EmailJS dashboard's email history, and the connected service's delivery status.
- **Works locally but not after deployment**: confirm the variables were added to the deployment environment and redeploy after adding them.
- **Origin/security errors**: add the exact site origin (scheme and hostname) to the EmailJS allowed origins settings.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
