import LetterGlitch from "./[components]/LetterGlitch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <LetterGlitch
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="shiny-text tiktok-sans-font text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
          HI, MY NAME IS
        </h1>
        <h2 className="shiny-text tiktok-sans-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
          ALVARO IZQUIERDO
        </h2>
        <div>
          <ul className="flex flex-row">
            <li className="p-4">
              <Button>
                <Link href="/about">About</Link>
              </Button>
            </li>
            <li className="p-4">
              <Button>
                <Link href="/projects">Projects</Link>
              </Button>
            </li>
            <li className="p-4">
              <Button>
                <Link href="/contact">Contact</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
