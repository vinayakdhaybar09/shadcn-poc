import React from "react";
import { Button } from "../components/ui/button";
import { AspectRatio } from "../components/ui/aspect-ratio";

const Hero = () => {
  return (
    <div className="bg-[#f6f3ee] w-full flex items-center ">
      <div className="w-[500px]">
        <AspectRatio ratio={1/1}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/469db379254973.5cbdfc4500c6c.jpg"
            alt="hero"
          />
        </AspectRatio>
      </div>
      <div className="w-[40%] flex flex-col gap-4">
        <h1 className="text-4xl font-bold " >Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt odio natus voluptatum officia unde. Voluptate dignissimos molestias vel repudiandae eum?
        </p>
        <div className="flex gap-4">
          <Button>Learn more</Button>
          <Button>Docs</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
