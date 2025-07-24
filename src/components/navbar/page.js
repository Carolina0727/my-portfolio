'use client';
import Image from 'next/image';

export default function Navbar() {
    const activateFunction=()=>{
        console.log("Guayando");
    }
  return (
    <nav className="flex">
        <div className="ml-6 flex justify-start my-4">
            <a> <Image src="/Images/FondoBlanco.png" alt="Logo" width="104" height="104"></Image></a>
        </div>
        <div className="playfair flex justify-end w-screen my-11 mx-8">
            <div>
                <button className="hover-underline-animation px-4 py-1">
                    Home
                </button>
                <button className="px-4 py-1 hover-underline-animation ml-4">
                    My Projects
                </button>
                <button className="px-4 py-1 hover-underline-animation ml-4">
                    About Me
                </button>
            </div>
            <div className="pl-10 ml-16">
                <button 
                    className="bg-primaryViolet text-background rounded-lg px-3 py-1 hover:bg-background hover:text-foreground"
                    onClick={activateFunction}   
                >
                    Let&apos;s Talk
                </button>
            </div>
            
        </div>
    </nav>
  );
}