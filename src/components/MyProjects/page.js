'use client';
import Image from 'next/image';
import styles from './page.module.css';

export default function MyProjects({ title, description, imageSrc, buttonText = "Take a Look", onClick }) {
  return (
    <div className={`flex flex-col md:flex-row items-center -space-x-48 my-16`}>
      <div className="w-2xl flex justify-center z-10">
        <Image
          src={imageSrc}
          alt="Project mockup"
          width={600}
          height={600}
        />
      </div>

      <div className={`${styles.backgroundCardsProjects} h-60 w-full text-white py-6 px-8 rounded-xl shadow-lg flex justify-between items-stretch`}>
        <div className="flex flex-col justify-center w-4/5 pr-4 pl-32">
          <h2 className="catamaranTitlesRegular font-normal pl-6 py-4">{title}</h2>
          <p className="catamaran pl-8">{description}</p>
        </div>

        <div className="flex flex-col justify-end items-end w-1/5">
          <button 
          className="buttonBackground font-semibold py-2 px-6 playfair rounded-md shadow-md"
          onClick={onClick}
          >
            {buttonText}
          </button>
        </div>
    </div>
    </div>
  );
}
