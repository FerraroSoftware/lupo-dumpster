import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={inter.className}>
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    </>
  );
}
