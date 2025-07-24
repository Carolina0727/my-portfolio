import Image from "next/image";
import MyProjects from "@/components/MyProjects/page";
import CardIcon from "@/components/cardIcon/page";

export default function Home() {
  return (
    <div>
      <main className="text-foreground">
        <div className="flex items-center h-112 hero-image mb-8 mx-8 rounded-3xl px-15">
          <div className="flex flex-col">
            <div className="flex justify-center">
             <p className="playfairTitlesRegular"> Hi, I&apos;m </p> <p className="playfairTitlesItalic mx-1"><strong>Carolina</strong></p>
            </div>
            <div className="flex justify-center">
              <p className="catamaranTitlesRegular">Let&apos;s turn your ideas into</p> <p className="catamaranTitlesRegular italic mx-1"><strong>detailed, structured,</strong></p>
            </div>
            <div className="flex justify-center">
              <p className="catamaranTitlesRegular">and</p> <p className="catamaranTitlesRegular italic mx-1"><strong> functional interfaces</strong></p>
            </div>
          </div>
          
        </div>
        <div className="playfairBigTitlesItalic font-bold mx-14 my-2 flex py-8 flex flex-col">
          <h1 className="flex-col pb-12">My Projects</h1>
          <MyProjects
            description="Redesigning one of Canada's top networking platforms, addressing pain points, enhancing strengths, and optimizing teamwork to achieve our goals."
            title="Redesign and Leadership"
            imageSrc="/Images/RedesignAndLeadership.png"
          />
          <MyProjects
            description="Designing a team-driven app to help teens build healthy habits, tackling challenges and prototyping in a limited time."
            title="Sprint: Limited time, maximum impact"
            imageSrc="/Images/Sprint.png"
          />
          <MyProjects
            description="An innovative UX-driven redesign of a café website, optimized for responsiveness, accessibility, and seamless user experience across all devices."
            title="Research-Driven, Responsive Design"
            imageSrc="/Images/Research.png"
          />
        </div>
      <div className="backgroundSecondary w-full flex flex-col items-center relative">
        <div className="flex flex-row w-full max-w-screen-xl">
          <div className="flex flex-col justify-center w-2/3 p-32">
            <h2 className="playfairBigTitlesItalic font-italic pl-6 py-4">About me</h2>
            <p className="catamaran pl-8">
              I&apos;m an eager learner with a 
              <strong className="boldText"> user-centered</strong> approach, experienced in collaborative projects. I enjoy designing 
              <strong className="boldText"> user-friendly</strong> interfaces, developing solutions, and 
              <strong className="boldText"> improving digital experiences </strong>. My background in customer service helps me listen to needs and ensure satisfaction. I&apos;m passionate about 
              <strong className="boldText"> user research</strong>, solving issues 
              <strong className="boldText"> collaboratively</strong>, and focusing on 
              <strong className="boldText"> accessibility</strong>. I thrive in fast-paced environments, value time management, and always strive to provide the best solutions.
            </p>
          </div>

          <div className="flex flex-col justify-center w-full md:w-1/3 relative z-10">
            <div className="w-[420px] h-[520px] -mt-24 overflow-hidden rounded-xl shadow-xl mx-auto">
              <Image
                src="/Images/profile.jpg"
                alt="Carolina's photo"
                width={600}
                height={700}
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mb-12">
          <button className="buttonBackground font-semibold py-3 px-8 playfair rounded-md shadow-md">
            More
          </button>
        </div>
      </div>
       <div className="playfairBigTitlesItalic font-bold mx-14 my-2 flex py-8 flex flex-col">
        <h1 className="flex-col pb-12">What can you expect working with me?</h1>
       </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-8 mb-16">
          
          <CardIcon
            srcImage="/Images/icons/pentag.png"
            text="Structured"
          />
          <CardIcon
            srcImage="/Images/icons/creativity.png"
            text="Creative"
          />
          <CardIcon
            srcImage="/Images/icons/userFocused.png"
            text="User-focused"
          />
          <CardIcon
            srcImage="/Images/icons/detailOriented.png"
            text="Detail-oriented"
          />
          <CardIcon
            srcImage="/Images/icons/collaborative.png"
            text="Collaborative"
          />
          <CardIcon
            srcImage="/Images/icons/analytical.png"
            text="Analytical"
          />
          <CardIcon
            srcImage="/Images/icons/solutionDriven.png"
            text="Solution-driven"
          />
          <CardIcon
            srcImage="/Images/icons/proactive.png"
            text="Proactive"
          />
          <CardIcon
            srcImage="/Images/icons/adaptable.png"
            text="Adaptable"
          />
        </div>
      </main>
    </div>
  );
}
