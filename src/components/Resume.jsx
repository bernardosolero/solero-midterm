import {
  FaGraduationCap,
  FaBolt,
  FaLaptopCode,
  FaBookOpen,
} from "react-icons/fa"

import TechBadge from "./TechBadge"

function Resume() {
  const skillGroups = [
    {
      category: "FRONTEND",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
      ],
    },

    {
      category: "PROGRAMMING",
      skills: [
        "Java",
        "Python",
        "Lua",
      ],
    },

    {
      category: "BACKEND / DATABASE",
      skills: [
        "MySQL",
        "Database Fundamentals",
      ],
    },

    {
      category: "SYSTEMS / SECURITY",
      skills: [
        "Networking",
        "Security Fundamentals",
      ],
    },

    {
      category: "DEVELOPMENT TOOLS",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "Vercel",
        "VS Code",
      ],
    },

    {
      category: "GAME DEVELOPMENT",
      skills: [
        "Roblox Studio",
        "Game Logic",
        "Scripting",
      ],
    },
  ]

  const timeline = [
    {
      year: "2010",
      type: "ORIGIN",
      title: "PLAYER ONE",
      description:
        "Gaming became one of my earliest long-term interests and eventually influenced my curiosity about technology and interactive systems.",
    },

    {
      year: "SELF-TAUGHT",
      type: "GAME DEVELOPMENT",
      title: "LUA / ROBLOX EXPERIMENTS",
      description:
        "Started experimenting with Lua and Roblox Studio through small scripts, mechanics, and personal tests while learning how game systems work.",
    },

    {
      year: "CURRENT",
      type: "EDUCATION",
      title: "BS INFORMATION TECHNOLOGY",
      description:
        "Currently studying Bachelor of Science in Information Technology as a third-year student at Cavite State University – Tanza Campus.",
    },

    {
      year: "2026",
      type: "WEB DEVELOPMENT",
      title: "REACT DEVELOPMENT",
      description:
        "Built responsive applications using React, JavaScript, Tailwind CSS, Git, GitHub, Vite, and Vercel.",
    },

    {
      year: "NEXT",
      type: "OBJECTIVE",
      title: "GAME DEVELOPMENT + CYBERSECURITY",
      description:
        "Continuing to improve my programming knowledge while developing stronger skills in game development, networking, systems, and cybersecurity.",
    },
  ]

  const strengths = [
    {
      title: "FAST LEARNER",
      description:
        "Able to adapt quickly to unfamiliar software, tools, and technical concepts.",
      icon: FaBolt,
      color: "#F7DF1E",
    },

    {
      title: "SELF-TAUGHT",
      description:
        "Comfortable learning independently through research, experimentation, and testing.",
      icon: FaBookOpen,
      color: "#22C55E",
    },

    {
      title: "TECH SAVVY",
      description:
        "Comfortable working with computers, development tools, software, and digital systems.",
      icon: FaLaptopCode,
      color: "#38BDF8",
    },

    {
      title: "STUDENT DEVELOPER",
      description:
        "Actively developing practical programming skills through academic and personal projects.",
      icon: FaGraduationCap,
      color: "#EF4444",
    },
  ]

  return (
    <section
      id="resume"
      className="relative overflow-hidden border-t border-white/25 bg-black px-5 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="border-b border-white/30 pb-12">
          <p className="font-['Orbitron'] text-xs font-black tracking-[0.3em] text-sky-400 sm:text-sm">
            PLAYER RECORD // EXPERIENCE
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            EXPERIENCE LOG.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
            My education, technical development, and progression
            as an Information Technology student.
          </p>
        </div>

        {/* PLAYER INFO */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["PLAYER", "Bernardo F. Solero II"],
            ["AGE", "22 Years Old"],
            ["CURRENT LEVEL", "BSIT // 3RD YEAR"],
            ["STATUS", "LEVELING UP"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="game-hover rounded-xl border border-white/30 bg-black p-6"
            >
              <p className="font-['Orbitron'] text-[10px] font-black tracking-[0.2em] text-sky-400">
                {label}
              </p>

              <p
                className={`mt-3 font-semibold ${
                  label === "STATUS"
                    ? "text-emerald-400"
                    : "text-white"
                }`}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.7fr_1.4fr]">
          <div>
            <p className="font-['Orbitron'] text-xs font-black tracking-[0.25em] text-sky-400">
              EDUCATION
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              CURRENT
              <br />
              CHECKPOINT.
            </h3>
          </div>

          <div className="rounded-2xl border border-white/30 bg-black p-7 sm:p-9">
            <div className="flex items-start gap-5">
              <FaGraduationCap className="shrink-0 text-3xl text-sky-400" />

              <div>
                <p className="font-['Orbitron'] text-xs font-black tracking-[0.2em] text-sky-400">
                  CAVITE STATE UNIVERSITY
                </p>

                <h4 className="mt-4 text-2xl font-black leading-tight sm:text-4xl">
                  Bachelor of Science in
                  <br />
                  Information Technology
                </h4>

                <p className="mt-5 text-base text-white/80">
                  Tanza Campus
                </p>

                <p className="mt-2 text-base text-white/65">
                  Third-Year Student
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SKILL SET */}
        <div className="mt-24 border-t border-white/30 pt-16">
          <p className="font-['Orbitron'] text-xs font-black tracking-[0.3em] text-sky-400">
            TECHNICAL INVENTORY
          </p>

          <h3 className="mt-3 text-3xl font-black sm:text-5xl">
            CURRENT SKILL SET.
          </h3>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            Technologies and tools I have used through coursework,
            laboratory activities, self-learning, and personal projects.
          </p>

          <div className="mt-12 space-y-12">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-5">
                  <p className="font-['Orbitron'] text-xs font-black tracking-[0.28em] text-sky-400">
                    {group.category}
                  </p>

                  <div className="h-px flex-1 bg-white/30" />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {group.skills.map((skill) => (
                    <TechBadge
                      key={skill}
                      name={skill}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JOURNEY */}
        <div className="mt-24 border-t border-white/30 pt-16">
          <p className="font-['Orbitron'] text-xs font-black tracking-[0.3em] text-sky-400">
            PROGRESSION HISTORY
          </p>

          <h3 className="mt-3 text-3xl font-black sm:text-5xl">
            MY JOURNEY.
          </h3>

          <div className="mt-10">
            {timeline.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="grid gap-5 border-t border-white/30 py-9 md:grid-cols-[170px_1fr]"
              >
                <p className="font-['Orbitron'] text-xs font-black tracking-[0.2em] text-white/65">
                  {item.year}
                </p>

                <div>
                  <p className="font-['Orbitron'] text-[10px] font-black tracking-[0.22em] text-sky-400">
                    {item.type}
                  </p>

                  <h4 className="mt-3 text-xl font-black sm:text-2xl">
                    {item.title}
                  </h4>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STRENGTHS */}
        <div className="mt-20 border-t border-white/30 pt-16">
          <p className="font-['Orbitron'] text-xs font-black tracking-[0.3em] text-sky-400">
            PLAYER ATTRIBUTES
          </p>

          <h3 className="mt-3 text-3xl font-black sm:text-5xl">
            CORE STRENGTHS.
          </h3>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((strength) => {
              const Icon = strength.icon

              return (
                <div
                  key={strength.title}
                  className="game-hover group rounded-xl border border-white/30 bg-black p-6"
                >
                  <Icon
                    style={{
                      color: strength.color,
                      filter: `drop-shadow(0 0 7px ${strength.color}55)`,
                    }}
                    className="text-2xl transition duration-300 group-hover:scale-110"
                  />

                  <h4 className="mt-6 font-['Orbitron'] text-xs font-black text-white">
                    {strength.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {strength.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume