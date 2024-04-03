"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
  // const data = Array.from({ length: 7 }, (_, index) => index + 1);

  const data = [
    {
      src: "/slider/image1.webp",
      atl: "image1",
      sizes: "80vw, 50vw",
      className:
        "w-[calc(100vw*0.76089)] md:w-[calc(100vw*0.507228)] xl:w-[700px] aspect-square",
    },
    {
      src: "/slider/image2.webp",
      atl: "image2",
      sizes: "60vw, 30vw",
      className:
        "w-[calc(100vw*0.50)] md:w-[calc(100vw*0.33333)] xl:w-[460px] aspect-[23/35]",
    },
    {
      src: "/slider/image3.webp",
      atl: "image3",
      sizes: "90vw, 60vw",
      className:
        "w-[calc(100vw*0.89132)] md:w-[calc(100vw*0.59419)] xl:w-[820px] aspect-[41/35]",
    },
    {
      src: "/slider/image4.webp",
      atl: "image4",
      sizes: "70vw, 40vw",
      className:
        "w-[calc(100vw*0.63045)] md:w-[calc(100vw*0.420278)] xl:w-[580px] aspect-[29/35]",
    },
    {
      src: "/slider/image5.webp",
      atl: "image5",
      sizes: "(max-width: 768px) 70vw, 40vw",
      className:
        "w-[calc(100vw*0.63045)] md:w-[calc(100vw*0.420278)] xl:w-[580px] aspect-[29/35]",
    },
    {
      src: "/slider/image6.webp",
      atl: "image6",
      sizes: "(max-width: 768px) 60vw, 30vw",
      className:
        "w-[calc(100vw*0.50)] md:w-[calc(100vw*0.33333)] xl:w-[460px] aspect-[23/35]",
    },
    {
      src: "/slider/image7.webp",
      atl: "image7",
      sizes: "(max-width: 768px) 90vw, 60vw",
      className:
        "w-[calc(100vw*0.89132)] md:w-[calc(100vw*0.59419)] xl:w-[820px] aspect-[41/35]",
    },
  ];

  return (
    <div className="bg-white">
      <Marquee>
        {data.map((image) => (
          <div
            key={image.atl}
            className={`relative mr-1 max-h-[700px] overflow-hidden ${image.className} rounded-lg mr-5`}
          >
            <Image
              src={image.src}
              alt={image.atl}
              layout="fill"
              sizes={`(max-width: 768px) ${image.sizes}`}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
