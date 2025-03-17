// components/StickyCardStack.jsx
"use client";

import Image, { StaticImageData } from "next/image";

interface StickyCardProps {
  title: string;
  image: StaticImageData;
  description: string;
  color: string;
  index: number;
}

export default function StickyCardStack({
  title,
  image,
  description,
  index,
  color,
}: StickyCardProps) {
  console.log(index);
  return (
    <div className="h-dvh flex items-center justify-center sticky top-0 px-8">
      <div
        className="w-full h-[400px] relative rounded-2xl shadow-sm p-4 flex justify-between"
        style={{
          backgroundColor: color,
          top: `calc(-10% + ${index * 50}px)`,
        }}
      >
        <div className="w-[20%]">00{index + 1}</div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="text-xl">{description}</div>
        </div>
        <div className=" relative w-[30%]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="400px"
          />
        </div>
      </div>
    </div>
  );
}
