import React from "react";


const Hero = () => {
  return (
    <section className="bg-white text-black font-sans px-6 py-12 cursor-custom">
      <div className="max-w-3xl mx-auto">
        <h1 className=" text-[3rem] md:text-[5rem] font-black leading-tight">
          Hello. <br />
          I'm Aaradhya
        </h1>

        <p className="mt-4 text-lg">
          I am Creative Coder | Problem Solver | Software Developer {" "}
         
        </p>

        <button className="mt-6 px-6 py-2 border-2 border-black font-bold bg-[#c4c4c4] hover:bg-black hover:text-white transition">
          <a href="mailto:jainaaradhya29@gmail.com">
            Hire Me!
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
