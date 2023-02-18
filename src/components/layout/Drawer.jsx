import Image from "next/image";
import React from "react";

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " max-w-[80vw] left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " -translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="relative px-2 w-screen max-w-[80vw] pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="p-4 flex justify-between font-semibold">
            <h2 className="self-center">Ujwal Dairy</h2>
            <div className="w-12">
              <Image
                alt="Ujwal Dairy's logo"
                width={100}
                height={100}
                className="w-full"
                src="/logo.png"
              />
            </div>
          </div>
          {children}
        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
