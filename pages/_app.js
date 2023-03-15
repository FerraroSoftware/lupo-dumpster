import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={inter.className}>
        <Navbar></Navbar>
        {/* <Sidebar></Sidebar> */}
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    </>
  );
}
