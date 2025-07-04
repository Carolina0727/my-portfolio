'use client';

export default function Navbar() {
    const activateFunction=()=>{
        console.log("Guayando");
    }
  return (
    <nav className="flex">
        <div className="ml-6 flex justify-start">
            <a> <img src="/Images/FondoBlanco.png" alt="Logo" width="104" height="104"></img></a>
        </div>
        <div className="playfair flex justify-end w-screen my-8 mx-12">
            <div>
                <button className="hover-underline-animation px-4 py-1 ">
                    Home
                </button>
                <button className="px-4 py-1 hover-underline-animation">
                    My Projects
                </button>
                <button className="px-4 py-1 hover-underline-animation">
                    About Me
                </button>
            </div>
            <div className="pl-10">
                <button 
                    className="bg-primaryViolet text-background rounded-lg px-3 py-1 hover:bg-background hover:text-foreground"
                    onClick={activateFunction}   
                >
                    
                    Let's Talk
                </button>
            </div>
            
        </div>
    </nav>
  );
}