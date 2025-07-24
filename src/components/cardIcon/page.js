import React from "react";
import styles from './page.module.css';
import Image from "next/image";

export default function CardIcon({ srcImage , text }) {
  return (
    <div className={`${styles.backgroundCardsProjects} relative w-70 h-80 rounded-2xl border border-purple-300 shadow-lg flex flex-col items-center justify-center text-center p-6`}>
      <div className="w-28 h-28 rounded-2xl flex items-center justify-center mb-6">
        <Image
            src={srcImage}
            alt="Icon"
            width={100}
            height={100}
            className="object-contain"
        />
      </div>
      <p className="w-full playfairRegular italic text-white">{text}</p>
    </div>
  );
}
