'use client';
import Overview from "@/components/overview/page";
import ProcessCard from "@/components/processCard/page";
import Image from "next/image";




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
        <Overview />

        <div className="backgroundSecondary w-full flex flex-col items-center">
          <div className="flex flex-col w-full max-w-screen-xl items-center">
            <h2 className="playfairBigTitlesItalic font-italic px-32 py-16">Process</h2>
            <ProcessCard
              title="Ideation"
              description="This phase involved key decisions that called us to action, such as defining the team structure, selecting the app to redesign, identifying what to keep and change, addressing UI and functional issues, choosing the right tools, and setting clear objectives and expectations for each team member."
              highlights={[
                "team structure",
                "app",
                "keep and change",
                "issues",
                "tools",
                "objectives",
                "expectations",
              ]}
              images={[
                "/Images/process/ideation1.png",
                "/Images/process/ideation2.png",
                "/Images/process/ideation3.png",
              ]}
            />
            <Image
              src="/Images/icons/footprint.png"
              alt="footprint"
              width={100}
              height={100}
              className="rotate-180 mb-8"
            />
             <ProcessCard
              title="UX Research"
              description="Given Meetup’s popularity, UX research was conducted to enrich insights and reduce bias, using the Guerrilla Method and interviews."
              highlights={[
                "UX research",
                "reduce bias",
                "Guerrilla Method",
                "interviews",
              ]}
              images={[
                "/Images/process/research.png",
              ]}
            />
            <Image
              src="/Images/icons/footprint.png"
              alt="footprint"
              width={100}
              height={100}
              className="rotate-180 mb-8"
            />
            <ProcessCard
              title="Creative process"
              description="Using Figma and tracking the process in Trello, the project's UI was developed based on team discussions, UX research findings, and the chosen leadership methodology."
              highlights={[
                "Figma",
                "Trello",
                "UI",
                "team discussions",
                "UX research",
                "leadership methodology",
              ]}
              images={[
                "/Images/process/creative1.png",
                "/Images/process/creative2.png",
              ]}
            />
          </div>
        </div>

        <section className="playfairRegular backgroundPrimary p-20">
          <h2 className="text-3xl mb-6">
            <strong>
              Results and Conclusions
            </strong>
          </h2>
          <div className="flex flex-row gap-6 p-20">
            <Image
              src="/Images/results/left.png"
              alt="left results"
              width={100}
              height={100}
              className=" scale-x-[-1] w-1/3 mt-4 -mb-6 p-8"
            />
            <Image
              src="/Images/results/center.png"
              alt="center results"
              width={100}
              height={100}
              className="w-1/3 p-18"
            />
            <Image
              src="/Images/results/right.png"
              alt="right results"
              width={100}
              height={100}
              className="w-1/3 mt-4 -mb-6 p-8"
            />
          </div>
          <p className="catamaran p-8">
            The Meetup redesign demonstrates how thoughtful UX research can enhance accessibility, attract more users, and keep them engaged. Prioritizing white space allows for a cleaner, more organized interface, improving user experience. Additionally, structured teamwork with clear goals, strong communication, and defined timelines was key to achieving our objectives efficiently. Simplicity remains a leading design trend, ensuring users aren't overwhelmed and can navigate seamlessly. In the end, less is more, and a well-balanced, intuitive design makes all the difference.
          </p>

        </section>
      </main>
    </div>
  );
}
