import React from "react";
import styles from './page.module.css';
import Image from "next/image";

export default function Overview() {
  return (
    <section className="playfairRegular backgroundPrimary p-20 ">
      <h2 className="text-3xl mb-6">Overview</h2>

      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Role & Duration */}
        <div className={"backgroundCardsProjects flex flex-row rounded-xl p-6 items-start"}>
          <Image
            src="/Images/icons/clock.png"
            alt="Clock Icon"
            width={50}
            height={50}
            className="w-1/3 p-6"
            />
          <div className="flex flex-col items-center w-2/3 p-6">
            <h3 className="text-2xl font-semibold mb-2">Role & duration:</h3>
            <ul className="catamaran ml-5 text-lg space-y-1">
              <li>Leader</li>
              <li>2 W</li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className={"backgroundCardsProjects flex flex-row rounded-xl p-6 items-start"}>
          <Image
            src="/Images/icons/team.png"
            alt="Clock Icon"
            width={50}
            height={50}
            className="w-1/3 mt-2 p-6"
            />
          <div className="flex flex-col items-center w-2/3 p-6">
            <h3 className="text-2xl font-semibold italic mb-2">Team:</h3>
            <p className="catamaran text-lg">Myself, one Co-leader and 2 more designers</p>
          </div>
        </div>

        {/* Goal */}
        <div className={"backgroundCardsProjects flex flex-row rounded-xl p-6 items-start"}>
          <Image
            src="/Images/icons/goal.png"
            alt="Clock Icon"
            width={50}
            height={50}
            className="w-1/3 mt-2 p-6"
            />
           <div className="flex flex-col items-center w-2/3 p-6">
            <h3 className="text-2xl font-semibold italic mb-2">Goal:</h3>
            <p className="catamaran text-lg">Redesign Meetup app</p>
          </div>
        </div>

        {/* Tools */}
        <div className={"backgroundCardsProjects flex flex-col items-center rounded-xl p-6"}>
          <h3 className="text-2xl font-semibold mb-4">Tools</h3>
          <div className="flex flex-row gap-4 items-center">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/Images/software/figma.png"
                alt="Figma"
                width={50}
                height={50}
                />
            </div>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/Images/software/figjam.png"
                alt="FigJam"
                width={50}
                height={50}
              />
            </div>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/Images/software/trello.png"
                alt="Trello"
                width={50}
                height={50}
              />
            </div>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/Images/software/slack.png"
                alt="Slack"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

