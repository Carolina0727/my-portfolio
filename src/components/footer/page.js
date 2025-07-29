'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className=" flex flex-col justify-center bg-foreground">
        <div className="flex justify-center my-8"> 
            <div className="relative w-[12.5rem] h-[12.5rem]">
                <Image
                    src="/Images/FondoNegro.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
       <div className="flex justify-center text-background playfair mb-8">
            <p> I&apos;m not reinventing the wheel, but I am making sure it spins in the best possible way.</p>
        </div>
        <div className="flex justify-center playfair mb-8">                    
            <button 
                className="bg-primaryViolet text-background rounded-lg px-3 py-1 hover:bg-background hover:text-foreground"
                onClick={() => window.location.href = "mailto:nunezflorezcarolina@gmail.com?subject=Hello&body=Hi Carolina,"} 
            >
                    Let&apos;s Talk
            </button>
        </div>
    </div>
  );
}