import Products from "@/components/products/Products";

function Index({ productsData }) {
  return <Products products={productsData?.products} />;
}

export default Index;

export async function getServerSideProps() {
  const date = await fetch("https://ujwal-api.vercel.app/data/products.json");
  var productsData = await date.json();
  return { props: { productsData } };
}

Index.defaultProps = {
  productsData: null,
};
