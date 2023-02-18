import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function Welcome() {
  return (
    <div className="bg-[#fcb900] pt-10 pb-20 mb-36 relative">
      <article className="container text-center max-w-2xl">
        <Typography variant="h2">Welcome To Ujwal Dairy</Typography>
        <Typography className="text-lg leading-7 font-medium mt-4">
          We hold our products to the highest standards of quality. We use
          stringent measures in our stare-of-the-art facility to ensure that our
          products retain the quality and freshness Ujwal Dairy is known for
        </Typography>
      </article>
      <div className="absolute -bottom-24 left-0 w-full flex justify-center">
        <Image width={128} height={153} src="/logo.png" />
      </div>
    </div>
  );
}

export default Welcome;
