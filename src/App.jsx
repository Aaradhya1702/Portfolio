import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import QuickLinks from "./Section2";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <QuickLinks />
      <section
        id="about"
        className="rich-text-block p-4 bg-white border-t-2 border-black w-full min-h-[50vh]"
      >
        <div className="w-[75%] mx-auto h-full">
          <h1 className="text-6xl my-8 font-bold">About Me</h1>
          <p>
            Hey! I’m Aaradhya Jain, a full-stack web developer based in Jaipur,
            India — currently pursuing my Master’s in Computer Applications from
            Banasthali Vidyapith. My background blends core computer science
            fundamentals with real-world application, and I love building clean,
            interactive, and impactful digital products.
          </p>
          <p>
            Over the last few years, I’ve worked on projects ranging from a quiz
            management platform with performance analytics, to an interactive
            chess game, and even a secure React app with GraphQL authentication.
            I’m comfortable across the stack — whether it’s designing responsive
            UIs in React + Tailwind, crafting APIs with Flask.
          </p>
          <p>I’m passionate about:</p>
          <ul>
            <li>Building user-friendly web applications</li>
            <li>Exploring new technologies and frameworks</li>
            <li>Learning by building — and shipping</li>
          </ul>
          <p>
            When I’m not coding, I’m probably exploring new tools, tweaking
            interfaces, or deep-diving into backend logic just for fun 😄
          </p>
          <h1 className="text-6xl my-8 font-bold">My Toolkit</h1>
          <h3 className="text-2xl font-bold">Languages & Framework</h3>
          <p>React.js, JavaScript, Python, Flask, GraphQL SQL, Java, C++</p>
          <h3 className="text-2xl font-bold">Tools & Tech:</h3>
          <p>Git, REST APIs, Jinja Templates, TailwindCSS</p>
        </div>
      </section>
      <div className="background border-t-2 border-black p-4">
        <h3 className="text-center">
          All Rights Reserved. Made with 💓 by Aaradhya
        </h3>
      </div>
    </>
  );
}

export default App;
