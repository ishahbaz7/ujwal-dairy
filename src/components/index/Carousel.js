import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

function Carousel() {
  const baseClasses = "relative bg-cover sm:h-[594px] h-[350px]";
  const viewProduct = (
    <Link href={"/products"}>
      <Button color="orange" className="mt-5">
        View all products
      </Button>
    </Link>
  );
  return (
    <div className="relative">
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
            className={`${baseClasses} bg-[100%_0] bg-[url('/assets/images/carousel/milk-slide.png')]`}
          >
            {" "}
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
            <div className="flex flex-col justify-center shadow-2xl items-center h-full">
              <Typography
                variant={"h2"}
                className="text-center bg-yellow-500/20 p-5  md:text-7xl text-4xl "
              >
                Fresh Curd
              </Typography>

              {viewProduct}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${baseClasses} bg-[70%_0] bg-[url('/assets/images/carousel/cheese-slide.png')]`}
          >
            <div className="flex flex-col justify-center   items-center h-full">
              <Typography
                variant={"h2"}
                className="text-center bg-yellow-500/20 p-5  md:text-7xl text-4xl "
              >
                Creamy cheese
              </Typography>
              <Typography variant={"h3"} className=" md:text-3xl text-3xl">
                Fresh! Order now
              </Typography>
              {viewProduct}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${baseClasses} bg-[70%_0] bg-[url('/assets/images/carousel/mithai-slide.png')]`}
          >
            <div className="flex flex-col justify-center container mx-auto  items-start h-full">
              <Typography
                variant={"h2"}
                className="md:text-5xl text-3xl bg-yellow-500/20 p-3"
              >
                Ujwal Dairy's <br /> special Mithai
              </Typography>
              <Typography
                variant={"h3"}
                className=" md:text-3xl text-2xl bg-yellow-500/20 p-3 "
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
