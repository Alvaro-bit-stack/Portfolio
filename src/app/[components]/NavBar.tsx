import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <div className="flex justify-center sticky top-0 p-2">
        <ul className="flex border-2 rounded-2xl bg-white justify-center w-fit md:w-1/3 md:min-w-[400px]  shadow-2xl shadow-black">
          <li className="p-3 px-5 text-gray-600 text-sm md:text-lg ">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="p-3 px-5 text-gray-600 text-sm md:text-lg">
            <Link href="/projects" className="hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li className="p-3 px-5 text-gray-600 text-sm md:text-lg text-nowrap">
            <Link href="/about" className="hover:text-gray-400">
              About Me
            </Link>
          </li>
          <li className="p-3 px-5 text-gray-600 text-sm md:text-lg text-nowrap">
            <Link href="/contact" className="hover:text-gray-400">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
