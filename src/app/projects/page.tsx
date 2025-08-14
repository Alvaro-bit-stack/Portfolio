import ScrollStack, { ScrollStackItem } from "../[components]/ScrollStack";
import Image from "next/image";
export default function Projects() {
  return (
    <>
      <div className="flex justify-center items-center mt-30 max-w-6xl mx-auto">
        <h1 className="text-white text-3xl md:text-6xl font-semibold text-shadow-lg text-shadow-sky-500 border-b-4">
          Featured <span className="font-extrabold">Projects</span>
        </h1>
      </div>
      <ScrollStack
        itemDistance={160}
        itemStackDistance={30}
        stackPosition="20%"
        baseScale={0.85}
        blurAmount={1}
      >
        <ScrollStackItem itemClassName="bg-white flex flex-col md:flex-row">
          <a
            href="https://classify-dusky.vercel.app/homepage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row w-full h-full"
          >
            <div className="w-[50%] flex flex-col items-center">
              <h1 className="text-5xl font-bold pb-5">Classify</h1>
              <p>
                Classify is a full-stack web app that helps students collaborate
                through shared classes. Built with Spring Boot and H2, the
                backend supports secure RESTful APIs for authentication,
                enrollment, and messaging. The frontend, developed with Node.js
                and TypeScript, uses AI tools for faster development and clean
                UI/UX design. APIs were tested with Postman and DBeaver. The app
                is deployed with the frontend on Vercel, the backend on AWS EC2,
                and Amazon S3 for image storage. Classify showcases skills in
                cloud deployment, API development, and full-stack engineering.
              </p>
            </div>
            <div className="relative w-[50%]">
              <Image
                src="/ClassifyProject.png"
                fill
                className="object-cover rounded-lg"
                alt="Picture of classify"
              />
            </div>
          </a>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-white flex flex-col md:flex-row">
          <a
            href="https://github.com/Alvaro-bit-stack/Personal_Finance_Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row w-full h-full"
          >
            <div className="w-[50%] flex flex-col items-center">
              <h1 className="text-5xl font-bold pb-5">
                Personal Finance Dashboard
              </h1>
              <p>
                Developed a personal finance tracker that performs ETL (Extract,
                Transform, Load) on real-world financial data using Pandas and
                PostgreSQL. Implemented optimized SQL queries to efficiently
                aggregate transaction data for insightful analysis. Leveraged
                Supabase as a relational database solution, while utilizing
                Python for data preprocessing and advanced analytics. Deployed
                an interactive and shareable dashboard with Streamlit Cloud,
                enabling dynamic financial visualization and user-friendly
                insights. This project highlights expertise in data engineering,
                SQL optimization, cloud deployment, and financial data
                analytics.
              </p>
            </div>
            <div className="relative w-[50%]">
              <Image
                src="/PersonalFinanceProj.png"
                fill
                className="object-cover rounded-lg"
                alt="Picture of classify"
              />
            </div>
          </a>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-white flex flex-col md:flex-row">
          <a
            href="https://github.com/Alvaro-bit-stack/ScheduleMaker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row w-full h-full"
          >
            <div className="w-[50%] flex flex-col items-center">
              <h1 className="text-5xl font-bold pb-5">
                Google Calender Automater
              </h1>
              <p>
                Built a Google Calendar automation tool that uses Google Vision
                API and Pillow to detect and draw bounding boxes around time
                slots in image-based schedules. Applied Python for image
                preprocessing and data cleaning, transforming extracted text
                into a structured format compatible with the Google Calendar
                API. The tool automates event creation, eliminating the need for
                manual input and significantly improving scheduling efficiency.
                This project demonstrates skills in OCR, image processing, API
                integration, and automation with Python.
              </p>
            </div>
            <div className="relative w-[50%]">
              <Image
                src="/GoogleCalenderProject.png"
                fill
                className="object-cover rounded-lg"
                alt="Picture of classify"
              />
            </div>
          </a>
        </ScrollStackItem>
      </ScrollStack>
    </>
  );
}
