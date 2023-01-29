import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/router";

export default function Products({ products, take }) {
  const router = useRouter();

  return (
    <div className="container mt-10">
      <Typography className="text-center text-2xl" variant="h1">
        Our Products
      </Typography>
      <div className="flex mt-20 gap-9  flex-wrap justify-center ">
        {products.map((val, index) => {
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
                color="blue"
                className="relative h-56 cursor-pointer"
              >
                <img
                  src={val.imgSrc}
                  alt="img-blur-shadow"
                  className="h-full w-full"
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
          className="flex -mt-12 mb-20 justify-center"
        >
          <Button color="orange">View all products</Button>
        </div>
      )}
    </div>
  );
}
