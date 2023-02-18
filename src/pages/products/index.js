import Products from "@/components/products/Products";

function Index({ productsData }) {
  return <Products products={productsData?.products} />;
}

export default Index;

export async function getStaticProps() {
  const data = await fetch(`${process.env.API_URL}/api/products`);
  var productsData = await data.json();
  console.log(process.env.API_URL);
  return { props: { productsData } };
}

Index.defaultProps = {
  productsData: null,
};
