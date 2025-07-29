'use client';
import Image from 'next/image';
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

  return (
    <nav className="flex">
        <div className="ml-6 flex justify-start my-4">
            <a> <Image src="/Images/FondoBlanco.png" alt="Logo" width="104" height="104"></Image></a>
        </div>
        <div className="playfair flex justify-end w-screen my-11 mx-8">
            <div>
                <button 
                    className={pathname === "/" ? "px-4 py-1 ml-4 navbar-active" : "px-4 py-1 hover-underline-animation ml-4"}
                    onClick={() => router.push('/')}
                >
                    Home
                </button>
                <button 
                    className={pathname.startsWith("/project") ? "px-4 py-1 ml-4 navbar-active" : "px-4 py-1 hover-underline-animation ml-4"}
                    onClick={() => router.push('/project-redesign')}
                >
                    My Projects
                </button>
                <button 
                    className={pathname === "/about" ? "px-4 py-1 ml-4 navbar-active" : "px-4 py-1 hover-underline-animation ml-4"}
                    onClick={() => router.push('/about')}
                >
                    About Me
                </button>
            </div>
            <div className="pl-10 ml-16">
                <button 
                    className="bg-primaryViolet text-background rounded-lg px-3 py-1 hover:bg-background hover:text-foreground"
                    onClick={() => window.location.href = "mailto:nunezflorezcarolina@gmail.com?subject=Hello&body=Hi Carolina,"}    
                >
                    Let&apos;s Talk
                </button>
            </div>
            
        </div>
    </nav>
  );
}