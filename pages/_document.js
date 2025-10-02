import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html className="h-full antialiased scroll-smooth" lang="en">
      <Head>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V0GLH72P5Z');
            gtag('config', 'AW-17610711210');
        `,
          }}
        />
        {/* Call Tracking */}
        <Script
          id="google-ad-call-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          gtag('config', 'AW-17610711210/DOx5CLaEvqUbEKrBuM1B', {
            'phone_conversion_number': '(727) 317-6717'
          });
      `,
          }}
        />
        {/* Button Clicked Call Tracking */}
        <Script
          id="google-ad-button-call-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-17610711210/4AFsCPDGtqUbEKrBuM1B',
                'value': 1.0, 'currency': 'USD',
                'event_callback': callback
            });
            return false;
          }
      `,
          }}
        />
      </Head>
      <body className="bg-black">
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-V0GLH72P5Z"
        ></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
