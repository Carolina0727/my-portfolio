'use client';
import Image from "next/image";
import CardHorizontal from "@/components/cardHorizontal/page";



export default function Home() {
  
  return (
    <div>
      <main className="text-foreground">
        <div className="playfairBigTitlesItalic font-bold mx-14 my-2 flex py-8 flex flex-col justify-center items-center">
            <h1 className="flex-col mb-8">Redesign and Leadership</h1>
        </div>
        <div className="backgroundSecondary w-full flex flex-col items-center relative">
            <div className="flex flex-row w-full max-w-screen-xl">
                <div className="flex flex-col justify-center w-2/3 p-16">
                <h2 className="playfairBigTitlesItalic font-italic pl-6 py-4">Problem Statement</h2>
                <p className="catamaran pl-8">
                    The main issues with 
                    <strong className="boldText"> Meetup </strong>  are its
                    <strong className="boldText"> cluttered </strong> interface, lack of white space, and poor 
                    <strong className="boldText"> information organization </strong>, making navigation frustrating. Many icons are
                    <strong className="boldText"> not intuitive </strong>, forcing users to guess their functions, and there are unnecessary options that add complexity instead of value. These problems make it harder to discover events, manage groups, and engage with the community. A redesign focusing on  
                    <strong className="boldText"> usability, accessibility, and better visual hierarchy </strong> would greatly enhance the user experience.
                </p>
                </div>

                <div className="flex flex-col justify-center w-full md:w-1/3 relative z-10">
                <div className="-my-24 rounded-xl mx-auto">
                    <Image
                    src="/Images/redesign.png"
                    alt="Carolina's photo"
                    width={700}
                    height={800}
                    />
                </div>
                </div>
            </div>

            
        </div>
        <div className="flex flex-row w-full max-w-screen-xl">
            <h1 className="playfairRegular flex-col pb-4">Overview</h1>

        </div>
      </main>
    </div>
  );
}
