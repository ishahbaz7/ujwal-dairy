import "@/styles/globals.css";
import Nav from "@/components/layout/Nav";
import Drawer from "@/components/layout/Drawer";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Nav /> */}
      <Component {...pageProps} />
    </>
  );
}
