import { AiOutlineCopyright } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#ECECEC]">
      {" "}
      <div className="container py-5 flex mx-auto flex-col md:flex-row space-y-4 w-full justify-between">
        <div className="w-16 self-center">
          <img className="w-full" src="/logo.png" alt="Ujwal dairy logo" />
        </div>
        <div className="flex items-center justify-center">
          <a rel="noreferrer" target={"_blank"} href="#">
            <FaLinkedinIn className="mx-3 text-3xl text-blue-500" />
          </a>
          <a rel="noreferrer" target={"_blank"} href="#">
            <FaInstagram color="red" className="mx-3 text-3xl" />
          </a>
          <a rel="noreferrer" target={"_blank"} href="#">
            <FaFacebookF className="text-3xl text-blue-500 mx-3" />
          </a>
          <a rel="noreferrer" target={"_blank"} href="#">
            <FaTwitter className="mx-3 text-3xl text-[#1DA1F2]" />
          </a>
        </div>
        <div className="self-center">
          <AiOutlineCopyright className="inline-block" />{" "}
          {new Date().getFullYear()} Ujwal Dairy <br />
          &nbsp; &nbsp; All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
