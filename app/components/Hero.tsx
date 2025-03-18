"use client";
import React, { useRef, useState, useEffect } from "react";
import StickyCardStack from "./cardstack/StickyCardStack";
import { projects } from "../data/data";
import Image from "next/image";
import image from "@/public/images/1.png";

const Hero = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div>
        <Image src={image} alt="" />
      </div>
      <div className="mb-50 mt-20" ref={cardsContainerRef}>
        {projects.map((item, index) => (
          <StickyCardStack key={index} index={index} {...item} />
        ))}
      </div>
      <div>
        <Image src={image} alt="" />
      </div>
    </>
  );
};

export default Hero;
