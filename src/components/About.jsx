import {
  FaGamepad,
  FaShieldAlt,
  FaBookOpen,
  FaFilm,
} from "react-icons/fa"

function About() {
  const interests = [
    {
      name: "Gaming",
      icon: FaGamepad,
      color: "#38BDF8",
    },

    {
      name: "Cybersecurity",
      icon: FaShieldAlt,
      color: "#22C55E",
    },

    {
      name: "Manga / Manhwa / Novels",
      icon: FaBookOpen,
      color: "#38BDF8",
    },

    {
      name: "Anime / Movies",
      icon: FaFilm,
      color: "#EF4444",
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/25 bg-black px-5 py-24 text-white sm:px-8 lg:py-32"
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
            PLAYER PROFILE // ABOUT ME
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            BEYOND THE SCREEN.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
            Gaming introduced me to digital worlds, but curiosity
            eventually made me interested in what happens behind
            them — the programming, systems, mechanics, interfaces,
            and technology that make everything work.
          </p>
        </div>

        {/* PROFILE */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* STORY */}
          <div className="rounded-2xl border border-white/30 bg-black p-7 sm:p-9">
            <p className="font-['Orbitron'] text-xs font-black tracking-[0.28em] text-sky-400">
              PLAYER BACKGROUND
            </p>

            <h3 className="mt-5 text-2xl font-black sm:text-4xl">
              PLAYER SINCE 2010.
            </h3>

            <div className="mt-7 space-y-5">
              <p className="text-base leading-8 text-white/90">
                I learn best by experimenting. That curiosity
                eventually led me from simply using technology
                to trying Lua and Roblox Studio, working with
                small scripts and mechanics, and later building
                applications using React.
              </p>

              <p className="text-base leading-8 text-white/75">
                I enjoy figuring things out through research,
                testing, and repeated attempts. Game development
                and cybersecurity both interest me because they
                involve understanding how systems behave and how
                their different parts interact.
              </p>

              <p className="text-base leading-8 text-white/75">
                Outside development, much of my free time still
                revolves around games and stories. I enjoy manga,
                manhwa, novels, anime, and movies.
              </p>
            </div>
          </div>

          {/* INTERESTS */}
          <div>
            <p className="font-['Orbitron'] text-xs font-black tracking-[0.25em] text-sky-400">
              PLAYER INTERESTS
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {interests.map((interest) => {
                const Icon = interest.icon

                return (
                  <div
                    key={interest.name}
                    className="
                      game-hover
                      group
                      flex
                      min-h-[105px]
                      items-center
                      gap-5
                      rounded-xl
                      border
                      border-white/30
                      bg-black
                      p-5
                    "
                  >
                    <Icon
                      style={{
                        color: interest.color,
                        filter: `drop-shadow(0 0 7px ${interest.color}55)`,
                      }}
                      className="shrink-0 text-2xl transition duration-300 group-hover:scale-110"
                    />

                    <p className="text-sm font-semibold leading-6 text-white">
                      {interest.name}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About