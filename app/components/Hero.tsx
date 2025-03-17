import React from "react";
import StickyCardStack from "./effection/StickyCardStack";
import { projects } from "../data/data";

const Hero = () => {
  return (
    <div className="mt-[50vh] mb-[100vh]">
      {projects.map((item, index) => (
        <StickyCardStack key={index} index={index} {...item} />
      ))}
    </div>
  );
};

export default Hero;
