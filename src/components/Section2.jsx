import React from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectSection from "./Project";

const QuickLinks = () => {
  const links = [
    { label: "Projects", href: "#projects", target: "_self" },
    { label: "About", href: "/about", target: "_self" },
    {
      label: "Contact",
      href: "mailto:jainaaradhya29@gmail.com",
      target: "_self",
    },
    {
      label: "Resume",
      target: "_blank",
      href: "https://drive.google.com/file/d/1xaNELQgajduJW9uZbTJ5kiydghIetp3N/view?usp=sharing",
    },
  ];

  return (
    <section className=" border-black border-2 relative mt-24 background">
      <section
        className=" px-6 py-10 font-sans text-black absolute  left-1/2 transform -translate-x-1/2
  top-[-115px]"
      >
        <h2 className="text-3xl font-bold mb-4">Quick links</h2>

        <div className=" flex flex-row gap-0 border border-black ">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.target}
              className=" w-full h-full cursor-pointer flex dropdown-toggle justify-between items-center p-1 text-[12px] sm:text-2xl sm:p-4 bg-[#c4c4c4] border-r border-b border-black font-bold hover:bg-gray-300 transition"
            >
              <span className="dropdown-toggle">{link.label}</span>
              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      </section>
      <ProjectSection />
    </section>
  );
};

export default QuickLinks;
