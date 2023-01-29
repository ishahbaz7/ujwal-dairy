import Products from "@/components/products/Products";

function products({ productsData }) {
  return <Products products={productsData.products} />;
}

export default products;

export async function getStaticProps() {
  const date = await fetch("http://localhost:3000/data/products.json");
  var productsData = await date.json();
  return { props: { productsData } };
}
