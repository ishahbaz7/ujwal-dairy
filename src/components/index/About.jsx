import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

function About() {
  return (
    <article className="container mx-auto">
      <Card className="bg-[#fff3d3] text-black grid grid-cols-1 lg:grid-cols-2 ">
        <CardBody>
          <div className="">
            <div className="space-y-4">
              <Typography variant="h2">About Ujwal Dairy</Typography>{" "}
              <Typography>
                Established in 2001, Ujwal Dairy is a favourite among
                Khandeshkar for its delectable taste and quality. The Dairy was
                Established by our visionary founder Hon. Sudhakar Mahajan. It
                is precisely why we have been the pride of Khandesh for four
                decades now. Delve into the fascinating history, you'll find a
                wealth of luscious range of Ujwal dairy products for your
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
          </div>
        </CardBody>
        <div className="lg:block hidden">
          <img className="w-full" src="/assets/images/cow.jpg" alt="" />
        </div>
      </Card>
    </article>
  );
}

export default About;
