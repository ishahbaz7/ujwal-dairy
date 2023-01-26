import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

function Carousel() {
  const baseClasses = "relative bg-cover sm:h-[594px] h-[635px]";
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
            className={`${baseClasses} bg-[90%_0] bg-[url('/assets/images/carousel/milk-slide.png')]`}
          >
            {" "}
            <div className="flex flex-col justify-center text-[#3D3C42] items-center h-full">
              <Typography variant={"h2"} className=" text-center text-7xl ">
                Fresh Milk and More!
              </Typography>
              <Typography variant={"h3"} className="text-green-700  text-4xl ">
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
            <div className="flex flex-col justify-center text-[#3D3C42] shadow-2xl items-center h-full">
              <Typography variant={"h2"} className="text-center  text-7xl ">
                Fresh Curd
              </Typography>

              {viewProduct}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${baseClasses} bg-[70%_0] text-[#3D3C42] bg-[url('/assets/images/carousel/cheese-slide.png')]`}
          >
            <div className="flex flex-col justify-center   items-center h-full">
              <Typography variant={"h2"} className="text-center  text-7xl ">
                Creamy cheese
              </Typography>
              <Typography variant={"h3"} className="  text-4xl ">
                Fresh! Order now
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
