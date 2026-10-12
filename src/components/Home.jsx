const heroImage = "/images/background.jpg"

function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* HERO ARTWORK */}
      <div className="relative h-[260px] overflow-hidden bg-black sm:h-[380px] md:h-[440px] lg:h-[520px] xl:h-[570px]">
        <img
          src={heroImage}
          alt="Portfolio background artwork"
          className="h-full w-full object-cover"
          style={{
            objectPosition: "center 8%",
          }}
        />

        <div className="absolute inset-0 bg-black/5" />

        <div className="absolute -bottom-20 left-1/2 h-32 w-[130%] -translate-x-1/2 rounded-[50%] bg-[#050505] sm:-bottom-24 sm:h-40 lg:-bottom-28 lg:h-48" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-['Orbitron'] text-xs font-black tracking-[0.3em] text-emerald-400 sm:text-sm">
            ACCESS GRANTED // PLAYER VERIFIED
          </p>

          <p className="mt-4 font-['Orbitron'] text-xs font-bold tracking-[0.22em] text-neutral-300 sm:text-sm">
            YOU PASSED THE TEST.
          </p>

          <h1 className="mt-6 text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.05em]">
            WELCOME TO
            <br />
            MY WORLD.
          </h1>

          <div className="mx-auto mt-9 h-px max-w-xl bg-white/20" />

          <h2 className="mt-10 text-2xl font-black sm:text-4xl lg:text-5xl">
            Bernardo F. Solero II
          </h2>

          <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <span className="font-['Orbitron'] text-xs font-black tracking-[0.16em] text-sky-400 sm:text-sm">
              ASPIRING GAME DEVELOPER
            </span>

            <span className="hidden text-neutral-400 sm:inline">
              //
            </span>

            <span className="font-['Orbitron'] text-xs font-black tracking-[0.16em] text-emerald-400 sm:text-sm">
              CYBERSECURITY ENTHUSIAST
            </span>
          </div>

          <p className="mx-auto mt-9 max-w-3xl text-base leading-8 text-neutral-200 sm:text-lg">
            I'm a 22-year-old third-year BS Information Technology
            student at Cavite State University – Tanza Campus with
            a strong interest in game development, interactive systems,
            programming, and cybersecurity.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-neutral-300">
            I've been gaming since childhood and eventually became
            interested in how games and software are built. From Lua
            and Roblox Studio experiments to React applications, I
            learn mainly by building, testing, and solving problems.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="
                hud-button
                inline-flex
                min-w-[210px]
                items-center
                justify-center
                rounded-lg
                border
                border-white
                bg-white
                px-7 py-4
                font-['Orbitron']
                text-xs
                font-black
                tracking-[0.16em]
                text-black
                transition
                duration-300
                hover:border-sky-400
                hover:bg-sky-400
                hover:text-black
                hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]
              "
            >
              VIEW MY WORK
            </a>

            <a
              href="#about"
              className="
                hud-button
                inline-flex
                min-w-[210px]
                items-center
                justify-center
                rounded-lg
                border
                border-white/40
                bg-black
                px-7 py-4
                font-['Orbitron']
                text-xs
                font-black
                tracking-[0.16em]
                text-white
                transition
                duration-300
                hover:border-sky-400
                hover:text-sky-400
                hover:shadow-[0_0_24px_rgba(56,189,248,0.18)]
              "
            >
              PLAYER PROFILE
            </a>
          </div>
        </div>

        {/* STATS */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 overflow-hidden rounded-xl border border-white/20 bg-black sm:mt-20 sm:grid-cols-4">
          <div className="border-b border-r border-white/15 p-5 text-center sm:border-b-0">
            <p className="font-['Orbitron'] text-xs font-black tracking-[0.16em] text-neutral-300">
              STATUS
            </p>

            <p className="mt-2 text-sm font-black text-emerald-400">
              ACTIVE
            </p>
          </div>

          <div className="border-b border-white/15 p-5 text-center sm:border-b-0 sm:border-r">
            <p className="font-['Orbitron'] text-xs font-black tracking-[0.16em] text-neutral-300">
              LEVEL
            </p>

            <p className="mt-2 text-sm font-black text-white">
              BSIT // YEAR 3
            </p>
          </div>

          <div className="border-r border-white/15 p-5 text-center">
            <p className="font-['Orbitron'] text-xs font-black tracking-[0.16em] text-neutral-300">
              MAIN PATH
            </p>

            <p className="mt-2 text-sm font-black text-sky-400">
              GAME DEV
            </p>
          </div>

          <div className="p-5 text-center">
            <p className="font-['Orbitron'] text-xs font-black tracking-[0.16em] text-neutral-300">
              SECONDARY
            </p>

            <p className="mt-2 text-sm font-black text-emerald-400">
              CYBERSECURITY
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home