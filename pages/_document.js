import { Html, Head, Main, NextScript } from "next/document";

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
        `,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </Head>
      <body className="bg-zinc-200 dark:bg-zinc-900">
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
