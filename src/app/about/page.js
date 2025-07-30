'use client';
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import CardWithImage from "@/components/cardWithImage/page";


const animation = { duration: 20000, easing: (t) => t };

export default function Home() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
          s.moveToIdx(5, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        slides: {
          perView: 4,
          spacing: 3,
        },
      })
    const highlightText = (text, highlights) => {
        const regex = new RegExp(`(${highlights.join("|")})`, "gi");
        const parts = text.split(regex);    
        return parts.map((part, i) =>
            highlights.some(word => word.toLowerCase() === part.toLowerCase()) ? (
                <strong key={i} className="boldText">
                    {part}
                </strong>
            ) : (
                <span key={i}>{part}</span>
            )
        );
    };
  
  return (
    <div>
      <main className="text-foreground px-18">
        <div className="playfairBigTitlesItalic font-bold mx-14 my-2 flex py-4 flex flex-col justify-center items-center">
            <h1 className="flex-col">Let Me Tell You About Me</h1>
        </div>
        <div className="backgroundPrimary w-full flex flex-row items-center">
            <div className="flex flex-col justify-center w-1/3">
                <div className="-my-24 rounded-xl mx-auto">
                    <Image
                    src="/Images/about/profile.jpg"
                    alt="Carolina's photo"
                    width={400}
                    height={500}
                    className="w-full h-[32rem] rounded-xl"
                    />
                </div>
            </div>
            <div className="flex flex-row w-full w-2/3">
                <div className="flex flex-col justify-center p-6">
                    <h2 className="playfairRegular font-bold py-4">My Journey into UX/UI Design</h2>
                    <p className="catamaran pl-8">
                        Since my first steps in the professional world, 
                        <strong className="boldText"> customer service </strong>  has been one of my greatest passions. As a Colombian, I&apos;ve always been motivated by the idea of 
                        <strong className="boldText"> helping people </strong> , which led me to study Biomedical Engineering. Through this career, I discovered how technical knowledge can improve the quality of life for patients. In Colombia, Biomedical Engineering is mainly focused on the management of 
                        <strong className="boldText"> biomedical devices </strong> in hospitals, and this connection to technology allowed me to understand the importance of 
                        <strong className="boldText"> well-designed medical equipment</strong> for effective healthcare services.
                    </p>
                    <h2 className="playfairRegular font-bold py-4">The Power of Listening and Understanding</h2>
                     <p className="catamaran pl-8">
                        My first experience in customer service in the biomedical sector was during my internship at a biomedical device company, where I learned how product launches and improvements directly affect the 
                        <strong className="boldText"> user experience </strong> . Later, I worked at a healthcare service provider, where I gained a deeper understanding of the importance of operators of biomedical equipment comprehending 
                        <strong className="boldText"> how the equipment works. </strong> Healthcare professionals often face difficulties with 
                        <strong className="boldText"> complex devices </strong>, and the
                        <strong className="boldText"> limited time for training </strong>, coupled with staff turnover, presents a major challenge to achieving quality results.
                    </p>
                </div>
            </div>    
        </div>
        <h2 className="playfairRegular font-bold py-4">From Technology to Design</h2>
        <p className="catamaran text-sm mx-auto mb-6">
            {highlightText("My shift to a commercial role as a product specialist allowed me to see the impact of poorly designed interfaces. In my work, I faced a serious issue: many of the adverse events to patients, such as burns caused by laser equipment, occurred due to complicated or misunderstood user interfaces by medical staff. This made me realize that the solution is not always in the product itself, but in how we design it and present it to the end user. That’s when I decided to pivot my career and dive into UX/UI Design, convinced that proper design can change the way people interact with technology, improving their experience and safety.", ["poorly designed interfaces","adverse events","laser equipment","misunderstood user interfaces","pivot my career","proper design can change the way people interact with technology,"])}
        </p>
        <h2 className="playfairRegular font-bold py-4">Additional Training: Full Stack Web Development</h2>
        <p className="catamaran text-sm mx-auto mb-6">
            {highlightText("To complement my knowledge in UX/UI Design and expand my understanding of the digital world, last year I completed a full stack web development bootcamp. This intensive course allowed me to delve into programming and web development, which has been an invaluable tool for understanding the interaction between design and code. This knowledge has given me a more complete perspective, enabling me to approach projects from a more technical viewpoint, ensuring that solutions are not only visually appealing but also functional and well-integrated.", ["full stack web development","programming and web development","technical viewpoint","functional","well-integrated"])}
        </p>
        <h2 className="playfairRegular font-bold py-4">Design as a Solution</h2>
        <p className="catamaran text-sm mx-auto mb-6">
            {highlightText("My education in UX/UI design has been deep and hands-on, learning to create intuitive solutions for websites and mobile apps. My previous knowledge in Biomedical Engineering, where I learned about the design of medical devices, has been fundamental, as it allows me to apply that technical knowledge to create more effective and user-friendly interfaces. I am passionate about understanding the user, discovering their needs, and designing solutions that are not only functional but also visually appealing and easy to use. My experience in customer service has given me an edge, as I know how to listen, understand, and apply what clients truly need.", ["create intuitive solutions","effective and user-friendly interfaces","understanding the user","functional","visually appealing","easy to use","listen","understand","apply"])}
        </p>
        <h2 className="playfairRegular font-bold py-4">Organized, Structured, and Always Learning</h2>
        <p className="catamaran text-sm mx-auto mb-6">
            {highlightText("I am a very organized and structured person in my work. I like to maintain order at every stage of the design process, from research to implementation. For me, collaboration is key. I firmly believe that the best results come from working in teams, and I enjoy contributing my ideas and listening to others to find innovative solutions. Additionally, I consider myself an excellent time manager: I understand the importance of meeting deadlines, and if I don't have the answer to a challenge, I won't rest until I find it.", ["organized","structured","order","design process","collaboration is key","working in teams","excellent time manager","meeting deadlines"])}
        </p>
        <h2 className="playfairRegular font-bold py-4">The Future of Design</h2>
        <p className="catamaran text-sm mx-auto mb-6">
            {highlightText("I believe that accessible design has the power to transform lives, and my goal is to create inclusive digital experiences that reach a broad audience. Every project is an opportunity to grow and learn something new, and I strive to deliver efficient design solutions that have a positive impact on users. My passion for design and customer service is constantly evolving, and I am always ready to learn more and improve in every project I undertake.", ["accessible design","inclusive digital experiences","opportunity to grow and learn something new","design and customer service"])}
        </p>
        <div className="flex flex-col items-center">
             <h2 className="playfairRegular font-bold py-4">Beyond Design</h2>

            <div ref={sliderRef} className="keen-slider mb-12">
                <div className="keen-slider__slide number-slide1">
                    <CardWithImage
                    srcImage="/Images/about/crocheting.png"
                    text="Crocheting"
                    />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <CardWithImage
                    srcImage="/Images/about/hiking.png"
                    text="Hiking"
                    />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <CardWithImage
                    srcImage="/Images/about/skating.png"
                    text="Skating"
                    />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <CardWithImage
                    srcImage="/Images/about/motorcycles.png"
                    text="Motorcycles"
                    />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <CardWithImage
                    srcImage="/Images/about/cats.png"
                    text="Cats"
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 mb-12">
            <button onClick={() => window.open("https://www.linkedin.com/in/ecarolinanunezflorez/", "_blank")} className="flex items-center">
                 <Image
                    src="/Images/about/linkedin.png"
                    alt="Carolina's photo"
                    width={400}
                    height={400}
                    className="w-30 h-18 rounded-xl"
                />
            </button>
           <button onClick={() => window.open("https://github.com/Carolina0727", "_blank")} className="flex items-center">
            <Image
                src="/Images/about/github.png"
                alt="Carolina's photo"
                width={400}
                height={500}
                className="w-20 h-20 rounded-xl"
            />
           </button>
            
        </div>
      </main>
    </div>
  );
}
