# NeoTek Consulting Website

A static Astro website for NeoTek Consulting, designed for Bluehost hosting with GitHub Actions automated FTPS deployment.

## What is included

- Astro static site source code
- NeoTek logo assets
- Core launch pages
- Service pages and offer ladder
- Placeholder MailerLite signup block
- Placeholder Google Calendar booking links
- Placeholder Venmo, Square, and PayPal links
- GitHub Actions workflow to deploy to Bluehost via explicit FTPS
- Bluehost `.htaccess` file for HTTPS redirect, directory safety, SVG MIME type, and cache headers

## Pages

- `/` - Home
- `/10-ai-automations/` - Lead magnet landing page
- `/early-access/` - NeoTek AI Early Access Program
- `/services/` - Services overview
- `/assessment/` - AI Readiness & Automation Assessment
- `/ai-agents/` - AI Agents and workflow automation overview
- `/privacy-first-ai/` - Privacy-first AI positioning
- `/about/` - Founder and credibility background
- `/contact/` - Contact and service area
- `/privacy-policy/` - Starter privacy policy
- `/terms/` - Starter website terms
- `/reservation-credit-terms/` - Starter reservation-credit terms

## Local development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

## Important placeholders to replace

Edit `src/data/site.ts` and replace these values:

```ts
X bookingUrl: '#replace-with-google-calendar-booking-link',
X leadMagnetUrl: '#replace-with-mailerlite-lead-magnet-url',
venmoUrl: '#replace-with-venmo-link',
squareUrl: '#replace-with-square-payment-link',
paypalUrl: '#replace-with-paypal-link'
```

Also update social links once your Facebook Page and Google Business Profile are live.

## MailerLite integration

The site includes a placeholder signup block in `src/components/LeadMagnetBlock.astro`.

For launch, choose one of these approaches:

1. Replace the placeholder with the MailerLite embedded form code.
2. Keep the button and set `leadMagnetUrl` in `src/data/site.ts` to the MailerLite landing page URL.

The second option is easiest for the first launch.

## Google Calendar booking

Create a Google Calendar appointment schedule under:

`jeff@neotekconsulting.com`

Recommended settings:

- Appointment name: Free AI Automation Feasibility Call
- Duration: up to 30 minutes
- Availability: Tuesday-Thursday, 10:00 AM-7:00 PM Pacific
- Buffer: 15 minutes
- Default meeting option: Zoom
- Alternate options by request: Google Meet, Microsoft Teams, phone

Paste the public booking URL into `bookingUrl` in `src/data/site.ts`.

## GitHub Actions deployment to Bluehost over FTPS

The workflow is located here:

`.github/workflows/deploy-bluehost.yml`

It runs automatically on pushes to `main` and can also be run manually from the GitHub Actions tab.

### Required GitHub repository secrets

In GitHub, go to:

`Repository > Settings > Secrets and variables > Actions > New repository secret`

Add these secrets:

| Secret name | Example value | Notes |
|---|---|---|
| `BLUEHOST_FTPS_HOST` | `ftp.neotekconsulting.com` or Bluehost server hostname | Use the FTP/FTPS host from Bluehost |
| `BLUEHOST_FTPS_USERNAME` | `your_cpanel_or_ftp_username` | Your Bluehost/cPanel username or a dedicated FTP account username |
| `BLUEHOST_FTPS_PASSWORD` | `your_ftps_password` | Password for that FTP account |
| `BLUEHOST_FTPS_PORT` | `21` | Optional; defaults to 21 for explicit FTPS |
| `BLUEHOST_FTPS_VERIFY_CERT` | `true` | Optional; defaults to true. Set to `false` only if Bluehost certificate validation fails and you understand the risk. |
| `BLUEHOST_REMOTE_DIR` | `/public_html` | Your domain document root from the FTP account root |
| `BLUEHOST_ALLOW_FTPS_ROOT_DEPLOY` | `true` | Optional; only needed if your FTP account is scoped directly to the domain root and `BLUEHOST_REMOTE_DIR` is `/` or `.` |

For addon domains, Bluehost may use a subfolder, such as:

```text
/public_html/neotekconsulting.com
```

The workflow includes a safety check requiring `BLUEHOST_REMOTE_DIR` to contain `public_html` before it deploys. If you create a dedicated FTP account scoped directly to the domain document root, you can set `BLUEHOST_REMOTE_DIR=/` and add `BLUEHOST_ALLOW_FTPS_ROOT_DEPLOY=true`.
### Choosing `BLUEHOST_REMOTE_DIR` for FTPS

The correct remote directory depends on how Bluehost/cPanel scopes your FTP account:

| FTP account type | Likely `BLUEHOST_REMOTE_DIR` | Notes |
|---|---|---|
| Main cPanel FTP account | `/public_html` | Common when the FTP login starts at the account home directory. |
| Addon domain under `public_html` | `/public_html/neotekconsulting.com` | Use the actual document root shown in Bluehost/cPanel. |
| Dedicated FTP account scoped to the domain root | `/` | Also set `BLUEHOST_ALLOW_FTPS_ROOT_DEPLOY=true` so the workflow intentionally allows root deploys. |

For safety, do not guess this value. Check Bluehost/cPanel for the domain document root, or connect once with FileZilla/Cyberduck and confirm where `index.html` should live.

### FTPS mode

This workflow uses **explicit FTPS** on port 21. In FTP clients, this is often shown as **FTP over TLS**, **Require explicit FTP over TLS**, or an `FTPES://` connection.


### Bluehost requirements

- Create or confirm an FTP account in Bluehost/cPanel.
- Use explicit FTPS on port 21.
- Confirm the FTP account's starting directory and the document root for `neotekconsulting.com`.
- Confirm SSL is active for the public website.
- The workflow copies `deploy/bluehost.htaccess` to `dist/.htaccess` before deployment.

## Deployment behavior

The workflow uses `lftp` with explicit FTPS settings (`ftp:ssl-force true`, `ftp:ssl-protect-data true`, `ftp:ssl-auth TLS`) and `mirror --reverse --delete` to sync the local `dist/` output to your Bluehost document root.

Important: `--delete` removes remote files that are no longer present in the new build. This is useful for keeping the site clean, but it means `BLUEHOST_REMOTE_DIR` must be correct before deployment.

## Suggested first commit flow

```bash
git init
git add .
git commit -m "Initial NeoTek Consulting Astro site"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/neotekconsulting-site.git
git push -u origin main
```

After the repository is in GitHub, add the FTPS secrets above, then re-run the workflow manually or push another commit.

## Notes

- This is a static website. No database, WordPress, or server-side application is required.
- The starter legal pages should be reviewed by qualified counsel before launch.
- The site is brand-first. Public language uses AI Agents and workflow automation rather than platform-specific agent framework names.
- Hermes Agent can be referenced later on technical/proposal pages if you decide to lead with that implementation stack.
