import React from "react";
import Image from "next/image";

export default function CardWithImage({ srcImage, text }) {
  return (
    <div>
      <div className="w-60 h-60 rounded-2xl flex items-center justify-center mb-6 overflow-hidden backgroundSecondary">
        <Image
          src={srcImage}
          alt="Icon"
          width={160}
          height={160}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-60 flex justify-center mb-4">
       <p className="text-center playfairRegular italic text-black">{text}</p>
      </div>
    </div>
  );
}
