/**
 * Quick test utility to verify reCAPTCHA configuration
 * 
 * Run this in your browser console on any page with the form to test:
 * 
 * 1. Check if reCAPTCHA is loaded:
 *    console.log('reCAPTCHA loaded:', typeof window.grecaptcha !== 'undefined');
 * 
 * 2. Get a token manually:
 *    window.grecaptcha.ready(function() {
 *      grecaptcha.execute('YOUR_SITE_KEY', {action: 'submit_form'}).then(function(token) {
 *        console.log('Token:', token);
 *      });
 *    });
 * 
 * 3. Test the verification endpoint:
 *    fetch('/api/sendinfo', {
 *      method: 'POST',
 *      headers: { 'Content-Type': 'application/json' },
 *      body: JSON.stringify({
 *        firstName: 'Test',
 *        lastName: 'User',
 *        email: 'test@example.com',
 *        phone: '5551234567',
 *        serviceNeeded: 'dumpster-rental',
 *        message: 'Test message',
 *        recaptchaToken: 'YOUR_TOKEN_HERE'
 *      })
 *    }).then(r => r.json()).then(console.log);
 */

// This file is for reference only - use the code snippets in your browser console
