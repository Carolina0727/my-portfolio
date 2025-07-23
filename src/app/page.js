import Image from "next/image";
import MyProjects from "@/components/MyProjects/page";

export default function Home() {
  return (
    <div>
      <main className="text-foreground">
        <div className="flex items-center h-112 hero-image mb-8 mx-8 rounded-3xl px-15">
          <div className="flex flex-col">
            <div className="flex justify-center">
             <p className="playfairTitlesRegular"> Hi, I'm </p> <p className="playfairTitlesItalic mx-1"><strong>Carolina</strong></p>
            </div>
            <div className="flex justify-center">
              <p className="playfairRegular">Let's turn your ideas into</p> <p className="playfairRegular mx-1"><strong>detailed, structured,</strong></p>
            </div>
            <div className="flex justify-center">
              <p className="playfairRegular">and</p> <p className="playfairRegular mx-1"><strong> functional interfaces</strong></p>
            </div>
          </div>
          
        </div>
        <div className="playfairBigTitlesItalic font-bold mx-14 my-2 flex py-8 flex flex-col">
          <h1 className="flex-col pb-12">My Projects</h1>
          <MyProjects/>
        </div>
      </main>
    </div>
  );
}
