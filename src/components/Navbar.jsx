import {
  FiHome,
  FiUser,
  FiCode,
  FiFileText,
  FiMail,
} from "react-icons/fi"

function Navbar() {
  const links = [
    {
      name: "HOME",
      href: "#home",
      icon: FiHome,
      color: "#38BDF8",
    },

    {
      name: "ABOUT",
      href: "#about",
      icon: FiUser,
      color: "#22C55E",
    },

    {
      name: "PROJECTS",
      href: "#projects",
      icon: FiCode,
      color: "#38BDF8",
    },

    {
      name: "RESUME",
      href: "#resume",
      icon: FiFileText,
      color: "#22C55E",
    },

    {
      name: "CONTACT",
      href: "#contact",
      icon: FiMail,
      color: "#38BDF8",
    },
  ]

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ====================================================== */}

      <nav className="top-navigation sticky top-0 z-50 hidden border-b md:block">
        <div className="mx-auto flex max-w-7xl items-stretch justify-between px-8">

          {/* HOME LEFT */}
          <a
            href="#home"
            className="
              nav-link
              flex min-h-[64px]
              items-center
              border-r
              border-white/25
              pr-8
              font-['Orbitron']
              text-xs
              font-black
              tracking-[0.22em]
            "
          >
            HOME
          </a>

          {/* RIGHT SIDE */}
          <div className="flex items-stretch">
            {links
              .filter((link) => link.name !== "HOME")
              .map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    nav-link
                    flex min-h-[64px]
                    items-center
                    border-l
                    border-white/25
                    px-6
                    font-['Orbitron']
                    text-[10px]
                    font-black
                    tracking-[0.18em]
                    lg:px-8
                    lg:text-xs
                  "
                >
                  {link.name}
                </a>
              ))}
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE ART NAVBAR
      ====================================================== */}

      <header
        className="
          sticky
          top-0
          z-50
          h-[88px]
          overflow-hidden
          border-b
          border-white/30
          bg-black
          md:hidden
        "
      >
        {/* ARTWORK */}
        <img
          src="/images/background.jpg"
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          style={{
            objectPosition: "50% 10%",
          }}
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/25
            via-black/40
            to-black/80
          "
        />

        {/* BLUE HUD LINE */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[2px]
            w-[55%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-sky-400
            to-transparent
          "
        />

        {/* HUD CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-[430px]
            items-start
            justify-between
            px-5
            pt-4
          "
        >
          <div>
            <p
              className="
                font-['Orbitron']
                text-[8px]
                font-black
                tracking-[0.28em]
                text-sky-400
              "
            >
              PLAYER WORLD
            </p>

            <p
              className="
                mt-1
                font-['Orbitron']
                text-[10px]
                font-black
                tracking-[0.18em]
                text-white
              "
            >
              BERNARDO // ONLINE
            </p>
          </div>

          {/* ACTIVE STATUS */}
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-400/60
              bg-black/70
              px-3
              py-1.5
              backdrop-blur
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-emerald-400
              "
            />

            <span
              className="
                font-['Orbitron']
                text-[7px]
                font-black
                tracking-[0.12em]
                text-emerald-400
              "
            >
              ACTIVE
            </span>
          </div>
        </div>

        {/* CURVED CUT */}
        <div
          className="
            absolute
            -bottom-[38px]
            left-1/2
            h-[55px]
            w-[125%]
            -translate-x-1/2
            rounded-[50%]
            bg-black
          "
        />

        {/* EDGE */}
        <div
          className="
            absolute
            bottom-[8px]
            left-1/2
            h-px
            w-[55%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
          "
        />
      </header>

      {/* =====================================================
          MOBILE BOTTOM NAV
      ====================================================== */}

      <nav
        className="
          fixed
          bottom-3
          left-1/2
          z-[60]

          grid
          w-[calc(100%-20px)]
          max-w-[430px]
          -translate-x-1/2
          grid-cols-5

          overflow-hidden
          rounded-2xl

          border
          border-white/40

          bg-black/95

          p-1.5

          shadow-[0_8px_40px_rgba(0,0,0,0.65),0_0_25px_rgba(56,189,248,0.12)]

          backdrop-blur-xl

          md:hidden
        "
      >
        {links.map((link) => {
          const Icon = link.icon

          return (
            <a
              key={link.name}
              href={link.href}
              className="
                group
                relative

                flex
                min-h-[64px]
                flex-col
                items-center
                justify-center
                gap-1.5

                rounded-xl

                transition
                duration-200

                hover:bg-white/[0.05]
                active:scale-95
              "
            >
              {/* ICON */}
              <Icon
                style={{
                  color: link.color,
                  filter: `drop-shadow(0 0 6px ${link.color}66)`,
                }}
                className="
                  text-[19px]
                  transition
                  duration-200

                  group-hover:-translate-y-1
                  group-hover:scale-110
                "
              />

              {/* LABEL */}
              <span
                style={{
                  color: link.color,
                }}
                className="
                  font-['Orbitron']
                  text-[8px]
                  font-black
                  tracking-[0.04em]
                "
              >
                {link.name}
              </span>

              {/* BOTTOM HOVER LINE */}
              <span
                style={{
                  backgroundColor: link.color,
                  boxShadow: `0 0 8px ${link.color}`,
                }}
                className="
                  absolute
                  bottom-0
                  left-1/2

                  h-[2px]
                  w-0

                  -translate-x-1/2

                  rounded-full

                  transition-all
                  duration-200

                  group-hover:w-8
                "
              />
            </a>
          )
        })}
      </nav>
    </>
  )
}

export default Navbar