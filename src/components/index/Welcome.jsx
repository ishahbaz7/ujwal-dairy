import React from "react";

function Welcome() {
  return (
    <div className="bg-[#fcb900] pt-10 pb-20 relative">
      <article className="prose container mx-auto text-center lg:prose-xl">
        <h2>Welcome To Ujwal Dairy</h2>
        <p>
          We hold our products to the highest standards of quality. We use
          stringent measures in our stare-of-the-art facility to ensure that our
          products retain the quality and freshness Ujwal Dairy is known for
        </p>
      </article>
      <div className="absolute -bottom-24 left-0 w-full flex justify-center">
        <img className="w-32" src="/logo.png" />
      </div>
    </div>
  );
}

export default Welcome;
