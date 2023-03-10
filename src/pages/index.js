import ContactForm from "@/components/contactUs/ContactForm";
import AddressMap from "@/components/contactUs/AddressMap";
import About from "@/components/index/About";
import Carousel from "@/components/index/Carousel";
import Products from "@/components/products/Products";
import Welcome from "@/components/index/Welcome";
import Head from "next/head";
import OurClients from "@/components/index/OurClients";

export default function Home({ productsData }) {
  return (
    <>
      <Head>
        <title>Ujwal Dairy</title>
        <meta
          name="description"
          content="Welcome to Ujwal Dairy. Established in 2001, Ujwal Dairy is a favourite among Khandeshkar for its delectable taste and quality. The Dairy was Established by our visionary founder Hon. Sudhakar Mahajan. It is precisely why we have been the pride of Khandesh for four decades now."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Carousel />
      <Welcome />
      <Products take={6} products={productsData.products} />
      <OurClients />
      <About />
      <ContactForm />
      <AddressMap />
    </>
  );
}

export async function getStaticProps() {
  const date = await fetch(`${process.env.API_URL}/api/products`);
  var productsData = await date.json();
  return { props: { productsData } };
}
