import React, { useEffect, useRef } from "react";
const projects = [
  {
    title: "Quiz Master",
    date: "2025-04-15",
    image: "https://quiz-master-college.onrender.com/auth/login",
    description:
      "A full-stack quiz management platform with admin controls and user analytics.",
  },
  {
    title: "Chess Game",
    date: "2025-03-01",
    image: "https://chess-game-ten-alpha.vercel.app/",
    description:
      "An interactive online chess game featuring legal move logic and responsive UI.",
  },
  {
    title: "React landing page",
    date: "2025-04-08",
    image: "https://react-landing-page-two-iota.vercel.app/",
    description:
      "A modern, responsive React-based landing page for a travel company.",
  },
];

const ProjectSection = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;

    if (!isDesktop) return;

    const container = containerRef.current;
    const scroll = scrollRef.current;

    const scrollBuffer = 200;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const containerBottom = containerTop + containerHeight;

      if (
        scrollTop >= containerTop + scrollBuffer &&
        scrollTop <= containerBottom
      ) {
        const progress = scrollTop - containerTop - scrollBuffer;
        scroll.style.transform = `translateX(-${progress}px)`;
      } else if (scrollTop < containerTop + scrollBuffer) {
        scroll.style.transform = `translateX(0px)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative md:pl-64 pt-24 h-[70vh] sm:h-[100vh] overflow-x-auto md:overflow-hidden  bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
    >
      <div
        className="transition-transform duration-100 ease-out "
        style={{ willChange: "transform" }}
        id="projects"
        ref={scrollRef}
      >
        <h2 className="text-4xl font-bold mb-4 px-10 pt-10">Projects</h2>
        <div className="flex gap-8 px-10 w-max">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm bg-white border-4 border-black shadow-[4px_4px_0_0_black] flex-shrink-0"
            >
              <div className="flex justify-between items-center bg-gray-300 px-4 py-2 border-b-2 border-black">
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                </div>
                <span className="text-sm">{project.date}</span>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <button className="border-2 border-black px-4 py-2 font-medium hover:bg-gray-200 transition">
                  <a target="_blank" href={project.image}>
                    View project
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
