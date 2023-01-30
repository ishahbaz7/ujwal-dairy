import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

function Carousel() {
  const baseClasses = "relative bg-cover md:h-[635px] sm:h-[594px] h-[350px]";
  const viewProduct = (
    <Link href={"/products"}>
      <Button color="orange" className="mt-5">
        View all products
      </Button>
    </Link>
  );
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
        <SwiperSlide>
          <div
            className={`${baseClasses} bg-[90%_0] bg-[url('/assets/images/carousel/paneer-slide.png')]`}
          >
            <div className="flex flex-col justify-center  items-center lg:items-start container h-full">
              <Typography
                variant={"h2"}
                className="text-center lg:bg-inherit bg-yellow-500/20  md:text-7xl text-4xl "
              >
                Malai Paneer
              </Typography>
              <Typography
                variant={"h3"}
                className="lg:text-orange-500 lg:bg-inherit bg-yellow-500/20 text-center lg:text-start max-w-xl md:text-3xl text-3xl"
              >
                Paneer, a source of lean protein that nourishes the body
              </Typography>
              {viewProduct}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${baseClasses} bg-[100%_0] bg-[url('/assets/images/carousel/milk-slide.png')]`}
          >
            <div className="flex flex-col justify-center  items-center h-full">
              <Typography
                variant={"h2"}
                className="text-center bg-yellow-500/20 p-5 rounded-lg md:text-7xl text-4xl "
              >
                Fresh Milk and More!
              </Typography>
              <Typography
                variant={"h3"}
                className="bg-yellow-500/20 p-5 rounded-lg  md:text-4xl text-2xl "
              >
                Good source of protein
              </Typography>
              {viewProduct}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${baseClasses} bg-[90%_0] bg-[url('/assets/images/carousel/curd-slide.png')]`}
          >
            {" "}
            <div className="flex flex-col justify-center shadow-2xl items-center lg:items-start h-full">
              <div className="container text-center lg:text-left">
                <Typography
                  variant={"h2"}
                  className="lg:bg-inherit bg-yellow-500/20 md:text-7xl text-4xl "
                >
                  Fresh Curd
                </Typography>
                <Typography
                  variant={"h3"}
                  className="lg:text-orange-500 lg:bg-inherit bg-yellow-500/20 md:text-3xl text-3xl"
                >
                  Relish the creaminess of curd
                </Typography>

                {viewProduct}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`${baseClasses} bg-[70%_0] bg-[url('/assets/images/carousel/mithai-slide.png')]`}
          >
            <div className="flex flex-col justify-center container mx-auto items-center lg:items-start h-full">
              <Typography
                variant={"h2"}
                className="md:text-5xl text-3xl lg:bg-inherit bg-yellow-500/20"
              >
                Ujwal Dairy&apos;s <br /> special Mithai
              </Typography>
              <Typography
                variant={"h3"}
                className="lg:text-orange-500 md:text-3xl text-2xl text-center lg:text-left lg:bg-inherit bg-yellow-500/20"
              >
                Mithai is the sweetest way <br /> to express love
              </Typography>
              {viewProduct}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
