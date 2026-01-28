/**
 * Verify reCAPTCHA v3 token with Google
 * @param {string} token - The reCAPTCHA token from the client
 * @param {string} expectedAction - The expected action name
 * @param {number} minScore - Minimum required score (default 0.9)
 * @returns {Promise<{success: boolean, score: number, error?: string}>}
 */
export async function verifyRecaptcha(token, expectedAction, minScore = 0.9) {
  try {
    if (!token) {
      return {
        success: false,
        score: 0,
        error: "No reCAPTCHA token provided",
      };
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is not configured");
      return {
        success: false,
        score: 0,
        error: "reCAPTCHA is not properly configured",
      };
    }

    // Verify the token with Google
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();

    // Check if verification was successful
    if (!data.success) {
      return {
        success: false,
        score: 0,
        error: `reCAPTCHA verification failed: ${data["error-codes"]?.join(", ") || "Unknown error"}`,
      };
    }

    // Verify the action matches what we expect
    if (data.action !== expectedAction) {
      return {
        success: false,
        score: data.score || 0,
        error: `Action mismatch. Expected '${expectedAction}', got '${data.action}'`,
      };
    }

    // Check if score meets minimum threshold
    if (data.score < minScore) {
      return {
        success: false,
        score: data.score,
        error: `reCAPTCHA score ${data.score} is below minimum threshold ${minScore}`,
      };
    }

    // All checks passed
    return {
      success: true,
      score: data.score,
    };
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return {
      success: false,
      score: 0,
      error: "Failed to verify reCAPTCHA token",
    };
  }
}
