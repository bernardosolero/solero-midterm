import { useState } from "react"

import TechBadge from "./TechBadge"

function Projects() {
  const [activeProject, setActiveProject] =
    useState(null)

  const projects = [
    {
      number: "01",

      title: "REACT CALCULATOR",

      type: "WEB APPLICATION",

      description:
        "A responsive calculator application created using React and Tailwind CSS as part of my DCIT 26 laboratory activities.",

      details:
        "The application uses React state and event handling to process calculations, keyboard input, clear functions, decimal values, and basic error handling. It was deployed online through Vercel.",

      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Vite",
        "Vercel",
      ],

      status: "COMPLETED",

      demo:
        "https://solero-calculator.vercel.app",

      github:
        "https://github.com/bernardosolero/solero-lab1",
    },

    {
      number: "02",

      title: "REACT TO-DO LIST",

      type: "WEB APPLICATION",

      description:
        "A task management application that allows users to create, complete, and delete tasks through a responsive React interface.",

      details:
        "This project helped me practice reusable React components, state management, event handling, conditional rendering, and responsive interface design.",

      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Vite",
        "Git",
      ],

      status: "COMPLETED",

      demo:
        "https://solero-todo.vercel.app",

      github:
        "https://github.com/bernardosolero/solero-lab2",
    },

    {
      number: "03",

      title: "ROBLOX / LUA EXPERIMENTS",

      type: "GAME DEVELOPMENT",

      description:
        "Small personal experiments created while learning Lua, Roblox Studio, game logic, and interactive systems.",

      details:
        "These were mainly self-learning experiments rather than complete published games. I used them to experiment with scripts, events, objects, game mechanics, and different ideas.",

      technologies: [
        "Lua",
        "Roblox Studio",
        "Game Logic",
        "Scripting",
      ],

      status: "EXPERIMENTAL",

      demo: null,

      github: null,
    },

    {
      number: "04",

      title: "INTERACTIVE E-PORTFOLIO",

      type: "CURRENT PROJECT",

      description:
        "A gaming-inspired portfolio featuring an interactive security maze before visitors can access the main website.",

      details:
        "The portfolio uses React state, keyboard and mobile touch controls, event handling, conditional rendering, responsive design, reusable components, and interactive game logic.",

      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Vite",
        "Game Logic",
      ],

      status: "IN DEVELOPMENT",

      demo: null,

      github: null,
    },
  ]

  const toggleProject = (index) => {
    setActiveProject(
      activeProject === index
        ? null
        : index
    )
  }

  const getStatusStyle = (status) => {
    if (status === "COMPLETED") {
      return "text-emerald-400"
    }

    if (status === "IN DEVELOPMENT") {
      return "text-sky-400"
    }

    return "text-white"
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/30 bg-black px-5 py-24 text-white sm:px-8 lg:py-32"
    >
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.28) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div>
          <p className="font-['Orbitron'] text-xs font-black tracking-[0.3em] text-sky-400 sm:text-sm">
            MISSION ARCHIVE // PROJECT DATABASE
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            WHAT I'VE BUILT.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
            Projects and experiments where I applied
            what I was learning instead of leaving it
            only as theory.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="mt-14 space-y-5">

          {projects.map((project, index) => {
            const isOpen =
              activeProject === index

            return (
              <article
                key={project.title}
                className="
                  game-hover
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/30
                  bg-black
                "
              >
                <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[90px_1fr_auto] lg:items-center">

                  {/* NUMBER */}
                  <div>
                    <p className="font-['Orbitron'] text-4xl font-black text-white/45 sm:text-5xl">
                      {project.number}
                    </p>
                  </div>

                  {/* INFO */}
                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <p className="font-['Orbitron'] text-[10px] font-black tracking-[0.25em] text-sky-400 sm:text-xs">
                        {project.type}
                      </p>

                      <span className="text-white/40">
                        //
                      </span>

                      <p
                        className={`
                          font-['Orbitron']
                          text-[10px]
                          font-black
                          tracking-[0.2em]
                          sm:text-xs
                          ${getStatusStyle(
                            project.status
                          )}
                        `}
                      >
                        {project.status}
                      </p>

                    </div>

                    <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">
                      {project.description}
                    </p>

                  </div>

                  {/* VIEW DETAILS */}
                  <button
                    type="button"
                    onClick={() =>
                      toggleProject(index)
                    }
                    className="
                      hud-button

                      w-full

                      rounded-xl

                      border
                      border-white/40

                      bg-black

                      px-5
                      py-3

                      font-['Orbitron']
                      text-xs
                      font-black
                      tracking-[0.15em]
                      text-white

                      transition
                      duration-300

                      hover:border-sky-400
                      hover:text-sky-400

                      hover:shadow-[0_0_20px_rgba(56,189,248,0.16)]

                      lg:w-auto
                    "
                  >
                    {isOpen
                      ? "CLOSE FILE"
                      : "VIEW DETAILS"}
                  </button>

                </div>

                {/* DETAILS */}
                {isOpen && (
                  <div className="border-t border-white/30 p-6 sm:p-8">

                    <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">

                      {/* REPORT */}
                      <div>

                        <p className="font-['Orbitron'] text-xs font-black tracking-[0.25em] text-sky-400">
                          MISSION REPORT
                        </p>

                        <p className="mt-4 text-base leading-8 text-white/75">
                          {project.details}
                        </p>

                        {(project.demo ||
                          project.github) && (
                          <div className="mt-7 flex flex-wrap gap-3">

                            {project.demo && (
                              <a
                                href={
                                  project.demo
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="
                                  hud-button
                                  rounded-xl
                                  border
                                  border-white
                                  bg-white
                                  px-5
                                  py-3
                                  font-['Orbitron']
                                  text-xs
                                  font-black
                                  tracking-[0.12em]
                                  text-black
                                  transition
                                  hover:border-sky-400
                                  hover:bg-sky-400
                                  hover:text-black
                                "
                              >
                                LIVE DEMO ↗
                              </a>
                            )}

                            {project.github && (
                              <a
                                href={
                                  project.github
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="
                                  hud-button
                                  rounded-xl
                                  border
                                  border-white/40
                                  bg-black
                                  px-5
                                  py-3
                                  font-['Orbitron']
                                  text-xs
                                  font-black
                                  tracking-[0.12em]
                                  text-white
                                  transition
                                  hover:border-sky-400
                                  hover:text-sky-400
                                "
                              >
                                SOURCE CODE ↗
                              </a>
                            )}

                          </div>
                        )}

                      </div>

                      {/* TECH */}
                      <div>

                        <p className="font-['Orbitron'] text-xs font-black tracking-[0.25em] text-sky-400">
                          TECH STACK
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">

                          {project.technologies.map(
                            (tech) => (
                              <TechBadge
                                key={tech}
                                name={tech}
                                compact
                              />
                            )
                          )}

                        </div>

                      </div>

                    </div>

                  </div>
                )}

              </article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Projects