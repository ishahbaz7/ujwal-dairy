import { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Drawer from "./Drawer";
import { useRouter } from "next/router";

export default function Nav() {
  const { pathname } = useRouter();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    setOpenNav(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {[
        { name: "Home", link: "/" },
        { name: "Products", link: "/products" },
        { name: "About Us", link: "/about-us" },
        { name: "Contact Us", link: "/contact-us", hidden: "" },
      ].map((val) => {
        return (
          <li key={val.name}>
            <Link href={val.link}>
              <Button
                color={"orange"}
                className={
                  pathname.toLowerCase() == val.link ? "" : "text-blue-gray-400"
                }
                variant="text"
              >
                {val.name}
              </Button>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {" "}
      <Drawer isOpen={openNav} setIsOpen={setOpenNav}>
        {navList}
      </Drawer>
      <Navbar fullWidth className="mx-auto py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-bold">
            <Link className="gap-2 flex items-center" href={"/"}>
              <img className="w-12 inline-block" src="/logo.png" />
              <span>Ujwal Dairy</span>
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <a href="tel:02585246730">
            <Button variant="gradient" size="sm" color="orange" className="">
              Call Now
            </Button>
          </a>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <RxCross1 color="orange" size={25} />
            ) : (
              <AiOutlineMenu color="orange" size={25} />
            )}
          </IconButton>
        </div>
      </Navbar>
    </>
  );
}
