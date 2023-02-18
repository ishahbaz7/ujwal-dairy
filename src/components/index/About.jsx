import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function About() {
  const router = useRouter();
  return (
    <Card>
      <article className="container text-center lg:text-start text-black grid grid-cols-1 lg:grid-cols-3">
        <CardBody className="col-span-2 ">
          <div>
            <div className="space-y-4">
              <Typography className="text-2xl" variant="h2">
                About Ujwal Dairy
              </Typography>{" "}
              <Typography>
                Established in 2001, Ujwal Dairy is a favourite among
                Khandeshkar for its delectable taste and quality. The Dairy was
                Established by our visionary founder Hon. Sudhakar Mahajan. It
                is precisely why we have been the pride of Khandesh for four
                decades now. Delve into the fascinating history, you&apos;ll
                find a wealth of luscious range of Ujwal dairy products for your
                savouries.
              </Typography>
              <Typography>
                Discover simple joys of healthy living wrapped in extravagance
                with Ujwal Dairy. Indulge, invigorate and taste the variety of
                nich creamy dairy products packed with essential nutrients. Bite
                into sweet memories, relish into the freshness and soak into
                buttery multitude of experiences. Ujwal Dairy serves you with
                the supreme goodness of dairy delights.
              </Typography>
            </div>
            <div
              onClick={() => router.push("/about-us")}
              className="flex justify-center"
            >
              {" "}
              <Button size="lg" variant="text" className="mt-5" color="orange">
                Know more
              </Button>
            </div>
          </div>
        </CardBody>
        <div className="">
          <Image
            width={408}
            height={425}
            src="/assets/images/about-banner.jpg"
            alt="About us image"
          />
        </div>
      </article>
    </Card>
  );
}

export default About;
