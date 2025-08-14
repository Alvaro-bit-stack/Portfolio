import { ButtonWithIcon } from "../[components]/ButtonWithIcon";
export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-30 max-w-6xl mx-auto">
        <h1 className="text-white text-6xl font-semibold text-shadow-lg text-shadow-sky-500">
          Get in <span className="font-extrabold">Touch</span>
        </h1>
      </div>
      <p className="pt-10 md:text-2xl text-white leading-relaxed text-center max-w-4xl mx-auto">
        {`Whether you're looking to discuss a new project, seek advice, or
        collaborate,`}
      </p>
      <p className="p-0 md:text-2xl text-white leading-relaxed text-center max-w-4xl mx-auto">
        {`I'm always excited to connect and explore new possibilities.`}
      </p>
      <div className="flex mt-10 justify-center ">
        <ButtonWithIcon linkedinIcon />
      </div>
      <div className="flex items-center justify-center my-6 px-1 md:px-60">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-4 text-white text-lg">OR</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex justify-center h-auto   p-5 pb-10">
        <form
          action={process.env.NEXT_PUBLIC_FORMSPREE_URL}
          method="POST"
          className="bg-white flex flex-col md:w-1/3 w-3/4 h-full border rounded-xl p-10 shadow-2xl shadow-white"
        >
          <label className="text-lg pb-1 pt-2">Full Name</label>
          <input
            type="text"
            name="full name"
            placeholder="John Doe"
            className="p-3 border-3 rounded-xl"
          ></input>
          <label className="text-lg pb-1 pt-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="p-2 border-3 rounded-xl"
          ></input>
          <label className="text-lg pb-1 pt-2">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Example Subject"
            className="p-2 border-3 rounded-xl"
          ></input>
          <label className="text-lg pb-1 pt-2">Description</label>
          <textarea
            placeholder="Type your message here"
            name="message"
            className="p-2 border-3 rounded-xl col-end-10 row-end-10"
          ></textarea>

          <input type="submit" value="Submit" className="mt-2 p-2 border-2" />
        </form>
      </div>
    </div>
  );
}
