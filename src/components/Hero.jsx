import React, { useEffect, useRef } from "react";

const Hero = () => {
  const pupilRef = useRef(null);
  const eyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!pupilRef.current || !eyeRef.current) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;

      const maxMove = 20; // Max pixels the pupil can move
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const clampedDistance = Math.min(distance, maxMove);

      const angle = Math.atan2(deltaY, deltaX);
      const moveX = Math.cos(angle) * clampedDistance;
      const moveY = Math.sin(angle) * clampedDistance;

      pupilRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="bg-white flex items-center flex-wrap text-black font-sans px-6 py-12 cursor-custom">
      <div className="max-w-3xl mx-auto">
        <h1 className=" text-[3rem] md:text-[5rem] font-black leading-tight">
          Hello. <br />
          I'm Aaradhya
        </h1>

        <p className="mt-4 text-lg">
          I am Creative Coder | Problem Solver | Software Developer{" "}
        </p>

        <button className="mt-6 px-6 py-2 border-2 border-black font-bold bg-[#c4c4c4] hover:bg-black hover:text-white transition">
          <a href="mailto:jainaaradhya29@gmail.com">Hire Me!</a>
        </button>
      </div>
      <div className="md:flex hidden relative" ref={eyeRef}>
        <img src="/hero.svg" alt="hero" />
        <div className="eye-circle">
          <img
            style={{
              willChange: "transform",
              transform:
                "translate3d(17.3115%, -13.7438%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            alt="pupil"
            ref={pupilRef}
            className="eye-pupil"
            src="/pupil.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
