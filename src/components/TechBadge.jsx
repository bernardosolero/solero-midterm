import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiLua,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiVercel,
} from "react-icons/si"

import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDatabase,
  FaNetworkWired,
  FaShieldAlt,
  FaGamepad,
  FaCode,
} from "react-icons/fa"

import { VscCode } from "react-icons/vsc"

const techLibrary = {
  HTML5: {
    icon: FaHtml5,
    color: "#E34F26",
  },

  CSS3: {
    icon: FaCss3Alt,
    color: "#1572B6",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  React: {
    icon: SiReact,
    color: "#61DAFB",
  },

  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  Java: {
    icon: FaJava,
    color: "#F89820",
  },

  Python: {
    icon: SiPython,
    color: "#3776AB",
  },

  Lua: {
    icon: SiLua,
    color: "#5A5ABF",
  },

  MySQL: {
    icon: SiMysql,
    color: "#4479A1",
  },

  Git: {
    icon: SiGit,
    color: "#F05032",
  },

  GitHub: {
    icon: SiGithub,
    color: "#FFFFFF",
  },

  Vite: {
    icon: SiVite,
    color: "#646CFF",
  },

  Vercel: {
    icon: SiVercel,
    color: "#FFFFFF",
  },

  "VS Code": {
    icon: VscCode,
    color: "#007ACC",
  },

  "Roblox Studio": {
    icon: FaGamepad,
    color: "#00A2FF",
  },

  "Game Logic": {
    icon: FaGamepad,
    color: "#22C55E",
  },

  Scripting: {
    icon: FaCode,
    color: "#38BDF8",
  },

  "Database Fundamentals": {
    icon: FaDatabase,
    color: "#4479A1",
  },

  Networking: {
    icon: FaNetworkWired,
    color: "#38BDF8",
  },

  "Security Fundamentals": {
    icon: FaShieldAlt,
    color: "#22C55E",
  },

  Cybersecurity: {
    icon: FaShieldAlt,
    color: "#22C55E",
  },
}

function TechBadge({
  name,
  compact = false,
}) {
  const tech =
    techLibrary[name] || {
      icon: FaCode,
      color: "#38BDF8",
    }

  const Icon = tech.icon

  return (
    <div
      className={`
        game-hover
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-white/30
        bg-black
        text-center

        ${
          compact
            ? "min-h-[105px] p-3"
            : "min-h-[130px] p-5"
        }
      `}
    >
      <Icon
        style={{
          color: tech.color,

          filter:
            `drop-shadow(0 0 7px ${tech.color}55)`,
        }}
        className={`
          transition
          duration-300
          group-hover:-translate-y-1
          group-hover:scale-110

          ${
            compact
              ? "text-3xl"
              : "text-4xl"
          }
        `}
      />

      <p
        className={`
          mt-4
          font-['Orbitron']
          font-black
          text-white

          ${
            compact
              ? "text-[9px]"
              : "text-[10px]"
          }
        `}
      >
        {name}
      </p>
    </div>
  )
}

export default TechBadge