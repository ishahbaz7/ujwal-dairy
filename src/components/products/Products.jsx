import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Products({ products, take }) {
  const router = useRouter();

  return (
    <div className="container mb-16">
      <Typography className="text-center text-2xl" variant="h1">
        Our Products
      </Typography>
      <div className="flex mt-16 gap-9  flex-wrap justify-center ">
        {products?.map((val, index) => {
          if (index >= take) {
            return;
          }
          return (
            <Card
              key={val.title}
              className="w-96 mb-20 flex flex-col justify-between"
            >
              <CardHeader
                onClick={() => router.push(`/products/${val.link}`)}
                color="orange"
                className="relative hover:scale-110 transition-all  cursor-pointer"
              >
                <Image
                  src={val.imgSrc}
                  alt="Product Image"
                  width={352}
                  height={224}
                />
              </CardHeader>
              <CardBody className="text-center ">
                <Typography variant="h5" className="mb-2">
                  {val.title}
                </Typography>
                <Typography>{val.description}</Typography>
                <div>
                  <Button
                    onClick={() => {
                      router.push(`/products/${val.link}`);
                    }}
                    className="float-right mt-4"
                    color="orange"
                  >
                    View details
                  </Button>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
      {take && (
        <div
          onClick={() => router.push("/products")}
          className="flex -mt-8  justify-center"
        >
          <Button color="orange">View all products</Button>
        </div>
      )}
    </div>
  );
}
