# reCAPTCHA v3 Implementation - Setup Checklist

## ✅ Completed Implementation

### Files Created/Modified:

1. **`/lib/recaptcha.js`** - Server-side verification utility
   - Verifies tokens with Google's API
   - Checks action name matches
   - Enforces 0.9 minimum score threshold

2. **`/pages/_document.js`** - Added reCAPTCHA script
   - Loads `api.js` with site key
   - Available on all pages

3. **`/components/new/request-form.jsx`** - Updated main form
   - Generates token on submit with action `submit_form`
   - Waits for reCAPTCHA to be ready
   - Shows "Loading security check..." until ready
   - Sends token with form data
   - Handles errors with user-friendly messages
   - Added required reCAPTCHA legal notice

4. **`/components/new/request-form-hero.jsx`** - Updated hero form
   - Same implementation as main form
   - Consistent user experience

5. **`/pages/api/sendinfo.js`** - Updated API endpoint
   - Verifies reCAPTCHA token before processing
   - Requires score ≥ 0.9
   - Returns helpful error messages
   - Logs successful verifications with score

6. **`/RECAPTCHA_SETUP.md`** - Complete setup documentation

---

## 🔧 Required: Environment Variables Setup

You need to add these to your `.env.local` file:

```bash
# Get these from: https://www.google.com/recaptcha/admin
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### How to Get Your Keys:

1. Go to https://www.google.com/recaptcha/admin
2. Click the **+** button to register a new site
3. Configure:
   - **Label**: "Lupo Dumpster Website" (or your choice)
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: 
     - Add `localhost` for development
     - Add your production domain (e.g., `lupodumpsterrentals.com`)
   - Accept terms and submit
4. Copy both keys:
   - **Site Key** (public, starts with `6L...`)
   - **Secret Key** (private, keep this secret!)
5. Add them to your `.env.local` file

---

## 🧪 Testing Checklist

### 1. Development Testing
```bash
# Start your dev server
npm run dev
```

Visit the form at:
- http://localhost:3000/ (main page with RequestForm)
- http://localhost:3000/contact (contact page with RequestFormHero)

### 2. Check Browser Console
Open DevTools (F12) and verify:
- No reCAPTCHA errors in console
- Button says "Get My FREE Quote Now →" (not "Loading security check...")
- On submit, you should see the token being generated

### 3. Test Submission Flow
Try submitting the form with valid data:
- ✅ **Expected**: Form submits successfully, redirects to thank-you page
- ✅ **Server logs**: Should show "reCAPTCHA verified successfully with score: X.XX"

### 4. Test Low Score (Manual)
To test the score threshold, you can temporarily change it in `/pages/api/sendinfo.js`:
```javascript
// Change this line temporarily:
const recaptchaResult = await verifyRecaptcha(
  recaptchaToken,
  "submit_form",
  1.1  // Change to 1.1 to force failure
);
```
- ❌ **Expected**: Form shows error about security verification
- ❌ **Browser alert**: "Security verification failed..."

### 5. Production Testing
Once deployed:
- Test the form on your production domain
- Check reCAPTCHA admin console for analytics
- Monitor scores in the admin dashboard
- Adjust threshold if needed (0.9 is very strict)

---

## 📊 Monitoring

### View reCAPTCHA Analytics:
1. Go to https://www.google.com/recaptcha/admin
2. Click on your site
3. View:
   - Request volume
   - Score distribution
   - Action breakdown
   - Verification errors

### Server Logs:
- Successful verifications: "reCAPTCHA verified successfully with score: X.XX"
- Failed verifications: "reCAPTCHA verification failed: [reason]"

---

## 🔒 Security Notes

1. **NEVER commit** `.env.local` to git (already in `.gitignore`)
2. **Site Key** is public (visible in browser) - that's OK
3. **Secret Key** must remain private (server-side only)
4. Tokens expire after 2 minutes
5. Each token can only be verified once
6. Score threshold of 0.9 means:
   - 1.0 = Very likely legitimate
   - 0.9 = High confidence threshold
   - 0.5 = Google's recommended starting point
   - 0.0 = Very likely a bot

---

## 🐛 Troubleshooting

### Button says "Loading security check..." forever
- ✅ Check: Is `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` set in `.env.local`?
- ✅ Check: Did you restart your dev server after adding the env var?
- ✅ Check: Browser console for reCAPTCHA errors
- ✅ Check: Site key is for reCAPTCHA v3 (not v2)

### All submissions are blocked
- ✅ Check: Is `RECAPTCHA_SECRET_KEY` set in `.env.local`?
- ✅ Check: Site key and secret key are from the same reCAPTCHA site
- ✅ Check: Your domain is added in reCAPTCHA admin console
- ✅ Consider: 0.9 threshold might be too strict, try 0.7 or 0.5

### Submissions work but no verification
- ✅ Check: Server logs for reCAPTCHA verification messages
- ✅ Check: `RECAPTCHA_SECRET_KEY` is set in production environment
- ✅ Check: Token is being sent in request body

### Different scores in development vs production
- ✅ This is normal - reCAPTCHA learns from real traffic
- ✅ Scores stabilize after production deployment
- ✅ Give it a few days to see real data

---

## 🚀 Deployment

### Vercel / Netlify / Other Platforms:
1. Add environment variables in your platform's dashboard:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
2. Ensure your production domain is added in reCAPTCHA admin
3. Deploy and test

### Production Domain:
Make sure to add your production domain in reCAPTCHA admin:
1. Go to https://www.google.com/recaptcha/admin
2. Click on your site
3. Settings → Domains
4. Add your production domain (without `http://` or `https://`)

---

## 📝 Next Steps

1. ✅ Get your reCAPTCHA keys
2. ✅ Add them to `.env.local`
3. ✅ Restart dev server
4. ✅ Test form submission
5. ✅ Add keys to production environment
6. ✅ Deploy
7. ✅ Monitor in reCAPTCHA admin console

---

## 🆘 Support

If you encounter issues:
1. Check the `RECAPTCHA_SETUP.md` file for detailed documentation
2. Review browser console for client-side errors
3. Check server logs for verification errors
4. Visit reCAPTCHA admin console for analytics

### Common Error Messages:
- "No reCAPTCHA token provided" → Token not sent from client
- "Action mismatch" → Action name doesn't match (should be `submit_form`)
- "Score below threshold" → User interaction looks suspicious
- "reCAPTCHA is not properly configured" → Secret key not set

---

## Score Threshold Recommendations

Based on use case, you might want to adjust the threshold:

- **0.9** (current) - Very strict, blocks most suspicious activity
- **0.7** - Balanced protection, still quite strict
- **0.5** - Google's default recommendation
- **0.3** - More lenient, fewer false positives

To change the threshold, edit `/pages/api/sendinfo.js` line 40:
```javascript
const recaptchaResult = await verifyRecaptcha(
  recaptchaToken,
  "submit_form",
  0.7  // Change this value
);
```
