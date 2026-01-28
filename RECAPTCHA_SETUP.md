# reCAPTCHA v3 Setup Instructions

This project uses Google reCAPTCHA v3 to protect forms from spam and bot submissions with a minimum score threshold of 0.9.

## Getting Your reCAPTCHA Keys

1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click on the **+** button to register a new site
3. Fill in the form:
   - **Label**: Give your site a name (e.g., "Lupo Dumpster Website")
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add your domains:
     - For development: `localhost`
     - For production: Your production domain (e.g., `lupodumpster.com`)
4. Accept the terms and click **Submit**
5. Copy both keys:
   - **Site Key** (starts with 6L...)
   - **Secret Key** (keep this private!)

## Environment Variables Setup

Add the following to your `.env.local` file:

```bash
# Google reCAPTCHA v3 Keys
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Important:**
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - This is public and will be visible in the browser
- `RECAPTCHA_SECRET_KEY` - This is private and should NEVER be exposed to the client

## How It Works

### Client-Side (Form Components)

1. The reCAPTCHA script is loaded in `_document.js`
2. When a user submits a form, the app:
   - Calls `grecaptcha.execute()` with action `'submit_form'`
   - Receives a token (valid for 2 minutes)
   - Sends the token along with form data to the API

### Server-Side (API Route)

1. The API receives the form data + reCAPTCHA token
2. Calls `verifyRecaptcha()` function which:
   - Sends the token to Google's verification endpoint
   - Checks that the action matches (`'submit_form'`)
   - Verifies the score is **≥ 0.9**
3. If verification fails or score is too low, the submission is rejected
4. If successful, the form is processed normally

## Score Threshold

The minimum score is set to **0.9** (on a scale of 0.0 to 1.0):
- **1.0** = Very likely a legitimate user
- **0.0** = Very likely a bot

A threshold of 0.9 is strict and will block most suspicious activity while allowing legitimate users through.

## Testing

### Development Testing
- In development (`localhost`), reCAPTCHA still works but may return different scores
- Scores stabilize once deployed to production with real traffic

### What Happens with Low Scores
- Users with scores < 0.9 will see an error message
- The error suggests calling directly: (727) 317-6717
- The form data is NOT submitted

## Monitoring

Monitor your reCAPTCHA performance:
1. Go to [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click on your site
3. View analytics including:
   - Request volume
   - Score distribution
   - Blocked requests

## Files Modified

- `/pages/_document.js` - Loads reCAPTCHA script
- `/lib/recaptcha.js` - Server-side verification utility
- `/components/new/request-form.jsx` - Form with reCAPTCHA
- `/components/new/request-form-hero.jsx` - Hero form with reCAPTCHA
- `/pages/api/sendinfo.js` - API route with verification

## Troubleshooting

### "Loading security check..." doesn't go away
- Check that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
- Verify the site key is for reCAPTCHA v3 (not v2)
- Check browser console for errors

### All submissions are being blocked
- Verify `RECAPTCHA_SECRET_KEY` is set on the server
- Check that the site key and secret key match the same reCAPTCHA site
- Review the score threshold (0.9 is very strict)

### Submissions work but no verification happens
- Ensure the secret key is set in production environment variables
- Check server logs for reCAPTCHA verification errors

## Security Notes

- Never commit your `.env.local` file
- Keep `RECAPTCHA_SECRET_KEY` private
- The site key can be public (it's visible in the browser anyway)
- Tokens expire after 2 minutes
- Each token can only be verified once
