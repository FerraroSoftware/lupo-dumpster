import logo from "../public/logo3.svg";
import Image from "next/image";
import Head from "next/head";
import Seo from "@/components/Seo";
import castle from "../public/dumpster-trailer-1.png";
import Script from "next/script";

export default function thankyou() {
  return (
    <>
      <Script
        id="facebook-pixel-lead"
        strategy="beforeInteractive" // Add this line
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '892278365833500');
        
            fbq('track', 'Lead');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=892278365833500&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <Head>
        <title>Thank You | Lupo Dumpster Rentals</title>
        <meta name="robots" content="noindex, nofollow" key="robots" />
        <meta
          name="description"
          content="Thanks for contacting Lupo Dumpster Rentals. We'll respond shortly. For urgent dumpster rental or junk removal in Pasco County, FL call (727) 317-6717."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Seo
          title="Thank You | Lupo Dumpster Rentals"
          description="Thanks for contacting Lupo Dumpster Rentals. We'll respond shortly. For urgent dumpster rental or junk removal in Pasco County, FL call (727) 317-6717."
          path="/thank-you"
        />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11112846382"
        strategy="afterInteractive" // Loads script after page becomes interactive
        async
      />

      {/* Inline script */}
      <Script
        id="gtag-init" // A unique ID (required for inline scripts)
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11112846382');
          `,
        }}
      />

      {/* capture lead */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '892278365833500');
            fbq('track', 'Lead');
        `,
        }}
      />

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <Image
            className="mx-auto h-16 rounded-full w-auto"
            src={logo}
            alt="Lupo Dumpster Rentals logo"
          />
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-black">
            Thanks for reaching out to Lupo Dumpster Rentals and Junk Removal!
          </h2>
          <p className="mt-4 text-center text-md leading-5 text-zinc-700">
            We have received your message and will get back to you as soon as
            possible.
          </p>
        </div>
        <Image
          src={castle}
          className="mx-auto max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-5xl rounded-md py-4 "
          alt="Thanks for contacting Lupo Dumpster Rentals in New Port Richey, FL"
        />
      </div>
    </>
  );
}
