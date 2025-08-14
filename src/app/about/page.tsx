"use client";
import { ButtonWithIcon } from "../[components]/ButtonWithIcon";
import DecryptedText from "../[components]/DecryptedText";
import ProfileCard from "../[components]/ProfileCard";
import { useRouter } from "next/navigation";
export default function About() {
  const router = useRouter();
  const main_text =
    "I'm a second-year student at Stevens Institute of Technology majoring in computer science. Some things about me is that I love all things technology. I'm a big yapper, Ill talk someone's ear off if they give me the chance. Some of my hobbies include playing guitar, playing soccer, watching anime, hiking, fitness, gaming, and just enjoying life. Circling back to technology, I have experience in full-stack development and web-services with expertise Java, SpringBoot, React, AWS,etc. I have an aptitude for problem solving, which has driven most of coding journey, but the more I have ventured in my journey, the greater my passion for coding has been built. I'm always open to exciting opportunities and collaborations. Feel free to download my resume or get in touch!";
  return (
    <>
      <div className="flex flex-col md:flex-row md:h-[100vh] text-white">
        <div className="flex justify-center md:justify-start md:items-center w-full h-full md:w-1/3 md:h-full md:pl-6">
          <ProfileCard
            name="Alvaro Izquierdo"
            title="Software Engineer"
            handle="fushistacksclouds"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/profile.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => router.push("/contact")}
            className="bg-transparent!"
          />
        </div>
        <div className=" flex-row md:flex-col md:flex md:justify-center md:relative w-full md:w-2/3 h-full">
          <h1 className="font-bold md:flex text-6xl w-[100%] text-center md:absolute md:top-30 md:left-10 text-shadow-lg text-shadow-sky-500">
            About Me
          </h1>
          <p>
            <DecryptedText
              text={main_text}
              animateOn="view"
              revealDirection="start"
              speed={80}
              maxIterations={30}
              className="text-2xl font-normal "
              parentClassName="flex p-5"
              encryptedClassName="text-2xl"
            />
          </p>
          <span className="pt-10 pl-5 items-center">
            <ButtonWithIcon downLoadIcon />
          </span>
        </div>
      </div>
    </>
  );
}
