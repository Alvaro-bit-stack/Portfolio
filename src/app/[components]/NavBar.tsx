import { ul } from "framer-motion/client";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-center sticky top-0 p-2">
        <ul className="flex border-2 rounded-2xl bg-white justify-center w-fit md:w-1/3 md:min-w-[400px]  shadow-2xl shadow-black">
          <li className="p-3 px-5 text-gray-600 text-sm md:text-lg ">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="p-3 px-5 text-gray-600 text-sm md:text-lg">
            <a href="/projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li className="p-3 px-5 text-gray-600 text-sm md:text-lg text-nowrap">
            <a href="/about" className="hover:text-gray-400">
              About Me
            </a>
          </li>
          <li className="p-3 px-5 text-gray-600 text-sm md:text-lg text-nowrap">
            <a href="/contact" className="hover:text-gray-400">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
