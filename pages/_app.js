import "../styles/globals.css";
import { Barlow_Condensed, Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import TextUsButton from "@/components/TextUsButton";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { StickyMobileBar } from "@/components/site/sticky-mobile-bar";

import { Analytics } from "@vercel/analytics/next";
import { SiteSchema } from "@/components/site/site-schema";
import { useSiteTracking } from "@/lib/analytics";

const inter = Inter({ subsets: ["latin"] });
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  useSiteTracking();
  return (
    <>
      <Head>
        <meta name="robots" content="index,follow" key="robots" />
      </Head>
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
            fbq('track', 'PageView');
            
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=892278365833500&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <Script
        id="hotjar"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:6406197,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
        }}
      />

      {/* Only sitewide entities here; page schemas (Service, FAQPage, Review) render with their visible content. */}
      <SiteSchema />

      <div className={`${inter.className} ${display.variable} pb-14 lg:pb-0`}>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <Component {...pageProps} />
        </main>
        <SiteFooter />
        <StickyMobileBar />
        <TextUsButton />
        <Analytics />
      </div>
    </>
  );
}
