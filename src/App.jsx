import { useState } from "react"
import FlipBook from "./FlipBook"
import PageWrapper from "./PageWrapper"

function App() {
  const pages = [
    {
      title: "",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold font-serif">📖 My Book Portfolio</h1>
          <p className="mt-4 text-xl italic">by Gokula Kannan alias GK</p>
          <p className="mt-4 text-xl italic text-blue">"Build Experiences, not just websites"</p>
        </div>
      ),
    },
    {
      title: "About Me",
      content: (
        <>
            <p className="mb-4">
    I’m <span className="font-semibold">Gokula Kannan (GK)</span>, a passionate software developer who loves
    turning ideas into real-world applications. My journey started with curiosity
    for how things work, and grew into a strong focus on building modern, scalable,
    and user-friendly solutions.
  </p>
  <p className="mb-4">
    My core expertise lies in <span className="font-semibold">React, TailwindCSS, Java, Spring Boot, and Oracle SQL</span>.
    I enjoy combining clean design with efficient back-end systems to deliver
    smooth digital experiences.
  </p>
  <p>
    Beyond coding, I believe in continuous learning and collaboration —
    whether it’s experimenting with new frameworks, refining problem-solving
    skills, or contributing to exciting projects. For me, development is
    about creating meaningful impact, not just writing code.
  </p>
        </>
      ),
    },
    {
      title: "Skills",
      content: (
        <div className="grid grid-cols-3 gap-6 place-items-center">
          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
            <span className="mt-2 text-sm">React</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
            <span className="mt-2 text-sm">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" className="w-12 h-12" />
            <span className="mt-2 text-sm">TailwindCSS</span>
          </div>
          {/* Oracle SQL */}
          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle SQL" className="w-12 h-12" />
            <span className="mt-2 text-sm">Oracle SQL</span>
          </div>

          {/* Spring Framework */}
          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Framework" className="w-12 h-12" />
            <span className="mt-2 text-sm">Spring</span>
          </div>

          {/* Spring Boot */}
          <div className="flex flex-col items-center">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" alt="Spring Boot" className="w-12 h-12" />
            <span className="mt-2 text-sm">Spring Boot</span>
          </div>

          {/* OOP */}
          <div className="flex flex-col items-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12" />
            <span className="mt-2 text-sm">Java</span>
          </div>

          {/* Add more skills here */ }
        </div >
      ),
},
{
  title: "Projects",
    content: (
      <>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="font-bold">Weather Now</h3>
            <p className="text-sm text-gray-600">A weather app built with React + OpenMeteo API</p>
            <a href="https://gokulakannan27.github.io/WeatherNow/" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 underline text-sm">
              View Live
            </a>
          </div>

          <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
            <h3 className="font-bold">Book Finder</h3>
            <p className="text-sm text-gray-600">A React app to search books using Google Books API</p>
            <a href="https://your-live-demo-link" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 underline text-sm">
              View Live
            </a>
          </div>
        </div>
      </>
    ),
    },
{
  title: "Contact",
    content: (
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg">📧 Get in touch:</p>
        <a href="gokulakannangokulakannan27@gmail.com"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Send Email
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          View Resume
        </a>
      </div>
    ),
    },
{
  title: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
        <h2 className="text-2xl font-bold">Let’s Work Together 🚀</h2>
        <p className="text-gray-600">Open to collaborations, freelance projects, and exciting opportunities.</p>
        <a href="gokulakannangokulakannan27@gmail.com"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Get in Touch
        </a>
      </div>

    )
}
  ]

return (
  <div className="flex justify-center items-center min-h-screen  ">
    <FlipBook Pages={pages} />
  </div>
)
}

export default App
