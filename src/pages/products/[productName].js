import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { paths } from "@/components/products/paths";
import Image from "next/image";

function Product({ product }) {
  const [img, setImg] = useState(product.imgSrc[0]);
  return (
    <div className="grid gap-10 my-10 flex-wrap  lg:grid-cols-2 container">
      <div className="flex flex-col gap-5">
        <Card className="max-w-[500px]">
          <CardBody>
            <div className="transition-all hover:scale-125 cursor-pointer">
              <Image width={452} height={288} src={img} alt="Product images" />
            </div>
            <Typography variant="h5" className="text-center mt-5">
              {product.slogan}
            </Typography>
          </CardBody>
        </Card>
        <div className="flex gap-5 max-w-sm ">
          {product.imgSrc.map((src) => {
            return (
              <div
                key={src}
                className={`border cursor-pointer ${
                  img == src ? "border-orange-600" : ""
                }`}
              >
                <Image
                  width={74}
                  height={74}
                  onClick={() => setImg(src)}
                  src={src}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-3 max-w-xl ">
        <a href="tel:02585246730" className="pb-6  lg:hidden block">
          <Button color="orange">know more</Button>
        </a>
        <Typography className="text-3xl" variant="h2">
          {product.title}
        </Typography>
        <Typography>{product.nutations}</Typography>
        {product.description.map((val, i) => {
          return (
            <Typography key={i}>
              <span className="font-bold">{i == 0 && "Description:"}</span>{" "}
              {val}
            </Typography>
          );
        })}
        {product.shelfLife && (
          <Typography>
            <span className="font-bold">Shelf Life:</span> {product.shelfLife}
          </Typography>
        )}
        <Typography>
          <span className="font-bold">Available quantity: </span>
          {product.qty}
        </Typography>

        <a href="tel:02585246730" className="pt-6  lg:block hidden">
          <Button color="orange">know more</Button>
        </a>
      </div>
    </div>
  );
}

export default Product;

export const getStaticPaths = async () => {
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `${process.env.API_URL}/api/products/${params.productName}`
  );
  console.log(res);
  const product = await res.json();
  console.log(product);
  return {
    props: { product },
  };
}
