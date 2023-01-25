import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={inter.className}>
        <Navbar></Navbar>
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    </>
  );
}
