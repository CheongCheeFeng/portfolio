import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log(name, email, message);
  };

  return (
    <div
      className="relative pb-[50px] bg-black flex-1 justify-center items-center"
      id="contact"
    >
      <div className="max-w-md sm:max-w-xl  md:max-w-3xl lg:md:max-w-4xl xl:max-w-full xl:mx-[16rem] mx-auto">
        <div className="text-center py-[60px] px-[50px]">
          <h2 className="text-5xl font-bold">Contact</h2>

          <p className="text-[#B8B8B8] text-xl mt-5 mb-16">
            Email me at
            <a
              className="font-semibold text-white"
              target="_blank"
              rel="noreferrer"
              href="mailto:cheefengcheong@gmail.com"
            >
              {" "}
              cheefengcheong@gmail.com
            </a>{" "}
            or message me here:
          </p>
          <div className="relative mx-auto w-full max-w-lg text-left">
            <form action="https://api.web3forms.com/submit" className="mt-10">
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <div className="grid gap-6 sm:grid-cols-1">
                <div className="relative z-0 col-span-2">
                  <input
                    type="text"
                    name="name"
                    className="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0 text-sm md:text-lg text-white focus:border-white focus:outline-none focus:ring-0"
                    placeholder=" "
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm md:text-lg text-gray-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white ">
                    Your name
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <input
                    type="text"
                    name="email"
                    className="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0 text-sm md:text-lg text-white focus:border-white focus:outline-none focus:ring-0 autofill:bg-transparent "
                    placeholder=" "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm md:text-lg text-gray-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white">
                    Your email
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows={5}
                    className="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0 text-sm md:text-lg text-white focus:border-white focus:outline-none focus:ring-0 min-h-[80px]"
                    placeholder=" "
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm md:text-lg text-gray-200 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white">
                    Your message
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="absolute right-0 mt-5 rounded-md bg-white px-10 py-2 text-black font-semibold bg-opacity-90 hover:bg-opacity-100"
                onClick={sendMessage}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
