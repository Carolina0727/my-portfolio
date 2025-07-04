import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="text-foreground">
        <div className="hero-image">
          <div className="hero-content">
            <div className="flex">
             <p className="playfairTitlesRegular"> Hi, I'm </p> <p className="playfairTitlesItalic mx-1"><strong>Carolina</strong></p>
            </div>
            <div className="flex">
              <p className="playfairRegular">Let's turn your ideas into</p> <p className="playfair mx-1"><strong>detailed, structured,</strong></p>
            </div>
            <div className="flex">
              <p className="playfairRegular">and</p> <p className="playfair mx-1"><strong> functional interfaces</strong></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
