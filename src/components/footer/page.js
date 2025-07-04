'use client';
export default function Footer() {
  return (
    <div className=" flex flex-col justify-center bg-foreground">
        <div className="flex justify-center my-8"> 
            <img src="/Images/FondoNegro.png" alt="Logo" width="104" height="104"></img>
        </div>
       <div className="flex justify-center text-background playfair mb-8">
            <p> I’m not reinventing the wheel, but I am making sure it spins in the best possible way.</p>
        </div>
        <div className="flex justify-center playfair mb-8">                    
            <button 
                className="bg-primaryViolet text-background rounded-lg px-3 py-1 hover:bg-background hover:text-foreground">
                    Let's Talk
            </button>
        </div>
    </div>
  );
}