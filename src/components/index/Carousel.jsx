import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

function Carousel() {
  const baseClasses = "relative bg-cover md:h-[635px] sm:h-[594px] h-[350px]";
  const viewProduct = (
    <Link href={"/products"}>
      <Button className="mt-2" color="orange">
        View all products
      </Button>
    </Link>
  );
  const slider = [
    {
      h1: "Malai Paneer",
      h2: "Paneer, a source of lean protein that nourishes the body",
      bgImg: "paneer-bg",
    },
    {
      h1: "Fresh Milk and More!",
      h2: "Good source of protein",
      bgImg: "milk-bg",
    },
    {
      h1: "Fresh Curd!",
      h2: "Relish the creaminess of curd",
      bgImg: "dahi-bg",
    },
    {
      h1: "special Mithai!",
      h2: (
        <div>
          Mithai is the sweetest way <br /> to express love
        </div>
      ),
      bgImg: "mithai-bg",
    },
  ];
  return (
    <div className="relative">
      <div className="md:h-[635px] sm:h-[594px] h-[350px] hidden"></div>
      <Swiper
        className="mySwiper"
        modules={[Autoplay]}
        effect={"fade"}
        autoplay={{ delay: 3000 }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {slider.map((val, i) => {
          return (
            <SwiperSlide key={i}>
              <div className={`${baseClasses} ${val.bgImg}`}>
                <div className="lg:flex space-y-2 lg:flex-col relative lg:top-0 top-[200px] text-center lg:justify-center  lg:items-start container h-full">
                  <Typography
                    variant={"h2"}
                    className="text-center lg:bg-inherit  md:text-7xl text-4xl "
                  >
                    {val.h1}
                  </Typography>
                  <Typography
                    variant={"h3"}
                    className="lg:text-orange-500 hidden lg:block lg:bg-inherit bg-yellow-500/20 text-center lg:text-start max-w-xl md:text-3xl text-3xl"
                  >
                    {val.h2}
                  </Typography>
                  {viewProduct}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;
