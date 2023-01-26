import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function Products() {
  return (
    <div className=" container mx-auto  mt-32">
      <Typography className="text-center" variant="h2">
        Our Products
      </Typography>
      <div className="flex mt-20 flex-wrap justify-center 2xl:justify-between gap-14">
        {[
          {
            title: "Buffalo Ghee",
            description:
              "Rich in nutrients: Buffalo ghee is a good source of fat-soluble vitamins, such as vitamin A, D, and E.",
            imgSrc: "/assets/images/products/ghee.png",
          },
          {
            title: "Dahi",
            description:
              "Good source of probiotics: Dahi is made by fermenting milk with live cultures of beneficial bacteria, known as probiotics. ",
            imgSrc: "/assets/images/products/dahi.png",
          },
          {
            title: "Paneer",
            description:
              "Paneer is a good source of high-quality protein, which is essential for building and maintaining muscle mass.",
            imgSrc: "/assets/images/products/paneer.png",
          },
        ].map((val) => {
          return (
            <Card key={val.title} className="w-96">
              <CardHeader color="blue" className="relative h-56">
                <img
                  src={val.imgSrc}
                  alt="img-blur-shadow"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  {val.title}
                </Typography>
                <Typography>{val.description}</Typography>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
