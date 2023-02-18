import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import Image from "next/image";

function OurClients() {
  return (
    <div className="container mb-16">
      <Typography className="text-center mb-12 text-2xl" variant="h1">
        Our Clients
      </Typography>
      <div className="flex justify-center lg:justify-start">
        {" "}
        <Card className="w-64 cursor-pointer">
          <CardHeader
            color="orange"
            className="relative hover:scale-[1.15] transition-all"
          >
            <div className="w-full flex justify-center">
              <div className="w-36 ">
                <Image
                  width={144}
                  height={144}
                  src="/assets/images/clients/dudhara_dairy.png"
                  alt="Dudhara Dairy logo"
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="text-base">
              Dudhdhara dairy Bharuch (Gujarat)
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default OurClients;
