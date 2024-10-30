import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Script from "next/script";
import Navbartwo from "../components/Navbartwo";
import Navbarthree from "../components/Navbarthree";
import Stickybar from "../components/Stickybar";
import LocationSchema from "../components/LocationSchema";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id="facebook-pixel"
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

      <Script
        id="hotjar"
        async
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3810376,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
        }}
      />

      <LocationSchema></LocationSchema>

      <main className={inter.className}>
        {/* <Navbar></Navbar> */}
        {/* <Stickybar></Stickybar> */}
        <Navbartwo></Navbartwo>
        {/* <Navbarthree></Navbarthree> */}
        {/* <Sidebar></Sidebar> */}
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    </>
  );
}
