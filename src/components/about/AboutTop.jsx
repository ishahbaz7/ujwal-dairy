import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function AboutTop() {
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="space-y-10 col-span-2">
          <div className="space-y-4">
            {" "}
            <Typography variant="h1" className="text-3xl text-center">
              About Us
            </Typography>
            <Typography>
              Established in 2001, Ujwal Dairy is a favourite among Khandeshkar
              for its delectable taste and quality. The Dairy was Established by
              our visionary founder Hon. Sudhakar Mahajan. It is precisely why
              we have been the pride of Khandesh for two decades now. Delve into
              the fascinating history, you&apos;ll find a wealth of luscious
              range of Ujwal dairy products for your savouries.
            </Typography>
            <Typography>
              Discover simple joys of healthy living wrapped in extravagance
              with Ujwal Dairy. Indulge, invigorate and taste the variety of
              nich creamy dairy products packed with essential nutrients. Bite
              into sweet memories, relish into the freshness and soak into
              buttery multitude of experiences. Ujwal Dairy serves you with the
              supreme goodness of dairy delights.
            </Typography>
            <Typography>
              We hold our products to the highest standards of quality. We use
              stringent measures in our stare-of-the-art facility to ensure that
              our products retain the quality and freshness Ujwal Dairy is known
              for. We believe in providing quality and satisfaction at
              reasonable price.
            </Typography>
          </div>
          <div className="space-y-3">
            <div>
              <Typography className="text-xl" variant="h2">
                Vision
              </Typography>
              <Typography>
                To be a Leader in Dairy Industry by always delighting consumers
                and meaningfully all stake holders, through continuous invest in
                quality manpower and product innovation.
              </Typography>
            </div>
            <div>
              <Typography className="text-xl" variant="h2">
                Mision
              </Typography>
              <Typography>
                To supply good and safe milk and milk products consistently
                through continual improvement of our systems and practices.
              </Typography>
            </div>
          </div>
        </div>
        <div className="my-auto">
          <Image
            width={408}
            height={425}
            src="/assets/images/about-banner.jpg"
            alt="About us image"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutTop;
