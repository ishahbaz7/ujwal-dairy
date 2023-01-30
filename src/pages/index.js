import ContactForm from "@/components/contactUs/ContactForm";
import AddressMap from "@/components/contactUs/AddressMap";
import About from "@/components/index/About";
import Carousel from "@/components/index/Carousel";
import Products from "@/components/products/Products";
import Welcome from "@/components/index/Welcome";
import Head from "next/head";
import { Button } from "@material-tailwind/react";

export default function Home({ productsData }) {
  return (
    <>
      <Head>
        <title>Ujwal Dairy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Carousel />
      <Welcome />
      <Products take={6} products={productsData.products} />
      <About />
      <ContactForm />
      <AddressMap />
    </>
  );
}

export async function getStaticProps() {
  const date = await fetch("https://ujwal-api.vercel.app/data/products.json");
  var productsData = await date.json();
  return { props: { productsData } };
}
