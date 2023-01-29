import "@/styles/globals.css";
import Nav from "@/components/layout/Nav";
import Drawer from "@/components/layout/Drawer";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
