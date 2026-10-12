import { useState } from "react"

import {
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))

    setSubmitted(false)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "NAME REQUIRED"
    }

    if (!formData.email.trim()) {
      newErrors.email = "EMAIL REQUIRED"
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email = "INVALID EMAIL"
    }

    if (!formData.message.trim()) {
      newErrors.message = "MESSAGE REQUIRED"
    } else if (
      formData.message.trim().length < 10
    ) {
      newErrors.message = "MESSAGE TOO SHORT"
    }

    return newErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors =
      validateForm()

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  const openEmail = () => {
    const subject = encodeURIComponent(
      `Portfolio Message from ${formData.name}`
    )

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )

    window.location.href =
      `mailto:bernardo.solero@cvsu.edu.ph?subject=${subject}&body=${body}`
  }

  const contactLinks = [
    {
      name: "EMAIL",
      value: "bernardo.solero@cvsu.edu.ph",
      href: "mailto:bernardo.solero@cvsu.edu.ph",
      icon: FaEnvelope,
      color: "#38BDF8",
    },

    {
      name: "INSTAGRAM",
      value: "@bernardofullersoleroii",
      href: "https://www.instagram.com/bernardofullersoleroii",
      icon: FaInstagram,
      color: "#E4405F",
    },

    {
      name: "GITHUB",
      value: "@bernardosolero",
      href: "https://github.com/bernardosolero",
      icon: FaGithub,
      color: "#FFFFFF",
    },

    {
      name: "MOBILE",
      value: "0992 319 0823",
      href: "tel:+639923190823",
      icon: FaPhoneAlt,
      color: "#22C55E",
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/20 bg-black px-5 py-24 text-white sm:px-8 lg:py-32"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div>
          <p className="font-['Orbitron'] text-xs font-black tracking-[0.3em] text-sky-400 sm:text-sm">
            COMMUNICATION TERMINAL // CONTACT
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            SEND A SIGNAL.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Want to connect, talk about development,
            games, technology, or something interesting?
            Send me a signal.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =================================================
              PROFILE SIDE
          ================================================== */}

          <div>
            {/* PROFILE */}
            <div className="rounded-2xl border border-white/20 bg-black p-7 text-center">
              {/* PROFILE CIRCLE */}

              <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
                {/* BLUE GLOW */}
                <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-xl" />

                {/* OUTER BORDER */}
                <div className="relative h-full w-full rounded-full border-2 border-sky-400 p-1.5">
                  <img
                    src="/images/profile.jpg"
                    alt="Bernardo F. Solero II"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </div>

                {/* ONLINE DOT */}
                <div className="absolute bottom-4 right-3 flex h-7 w-7 items-center justify-center rounded-full border-4 border-black bg-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-black" />
                </div>
              </div>

              <p className="mt-7 font-['Orbitron'] text-[10px] font-black tracking-[0.25em] text-sky-400">
                PLAYER IDENTIFIED
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                Bernardo F. Solero II
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                BS Information Technology
                <br />
                Aspiring Game Developer
              </p>

              <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/40 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                <span className="font-['Orbitron'] text-[9px] font-black tracking-[0.18em] text-emerald-400">
                  ONLINE // LEARNING
                </span>
              </div>
            </div>

            {/* CONTACT LINKS */}
            <div className="mt-5 space-y-3">
              {contactLinks.map((contact) => {
                const Icon = contact.icon

                return (
                  <a
                    key={contact.name}
                    href={contact.href}
                    target={
                      contact.name ===
                        "INSTAGRAM" ||
                      contact.name ===
                        "GITHUB"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      contact.name ===
                        "INSTAGRAM" ||
                      contact.name ===
                        "GITHUB"
                        ? "noreferrer"
                        : undefined
                    }
                    className="
                      game-hover
                      group
                      flex
                      items-center
                      justify-between
                      gap-4
                      rounded-xl
                      border
                      border-white/20
                      bg-black
                      p-5
                    "
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center">
                        <Icon
                          style={{
                            color:
                              contact.color,

                            filter:
                              `drop-shadow(0 0 6px ${contact.color}55)`,
                          }}
                          className="text-2xl transition duration-300 group-hover:scale-110"
                        />
                      </div>

                      <div className="min-w-0 text-left">
                        <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.2em] text-sky-400">
                          {contact.name}
                        </p>

                        <p className="mt-1 break-all text-sm font-semibold text-white">
                          {contact.value}
                        </p>
                      </div>
                    </div>

                    <span className="font-['Orbitron'] text-xs text-white transition group-hover:text-sky-400">
                      ↗
                    </span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================== */}

          <div className="rounded-2xl border border-white/20 bg-black p-6 sm:p-8 lg:p-10">
            <p className="font-['Orbitron'] text-xs font-black tracking-[0.25em] text-sky-400">
              MESSAGE TERMINAL
            </p>

            <h3 className="mt-3 text-2xl font-black sm:text-3xl">
              TRANSMIT MESSAGE.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/65">
              Enter your information below. The system
              will validate your message before opening
              your email application.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-9 space-y-6"
              noValidate
            >
              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="font-['Orbitron'] text-[10px] font-black tracking-[0.2em] text-white"
                >
                  YOUR NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`
                    mt-3
                    w-full
                    rounded-lg
                    border
                    bg-black
                    px-4 py-4
                    text-base
                    text-white
                    outline-none
                    transition

                    ${
                      errors.name
                        ? "border-red-500"
                        : "border-white/25 focus:border-sky-400"
                    }
                  `}
                />

                {errors.name && (
                  <p className="mt-2 font-['Orbitron'] text-[10px] font-black tracking-[0.15em] text-red-500">
                    ERROR // {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="font-['Orbitron'] text-[10px] font-black tracking-[0.2em] text-white"
                >
                  YOUR EMAIL
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`
                    mt-3
                    w-full
                    rounded-lg
                    border
                    bg-black
                    px-4 py-4
                    text-base
                    text-white
                    outline-none
                    transition

                    ${
                      errors.email
                        ? "border-red-500"
                        : "border-white/25 focus:border-sky-400"
                    }
                  `}
                />

                {errors.email && (
                  <p className="mt-2 font-['Orbitron'] text-[10px] font-black tracking-[0.15em] text-red-500">
                    ERROR // {errors.email}
                  </p>
                )}
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="font-['Orbitron'] text-[10px] font-black tracking-[0.2em] text-white"
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What do you want to talk about?"
                  className={`
                    mt-3
                    w-full
                    resize-none
                    rounded-lg
                    border
                    bg-black
                    px-4 py-4
                    text-base
                    leading-7
                    text-white
                    outline-none
                    transition

                    ${
                      errors.message
                        ? "border-red-500"
                        : "border-white/25 focus:border-sky-400"
                    }
                  `}
                />

                <div className="mt-2 flex items-center justify-between gap-4">
                  <div>
                    {errors.message && (
                      <p className="font-['Orbitron'] text-[10px] font-black tracking-[0.15em] text-red-500">
                        ERROR // {errors.message}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-white/55">
                    {formData.message.length} CHARACTERS
                  </p>
                </div>
              </div>

              {/* VALIDATE */}

              <button
                type="submit"
                className="
                  hud-button
                  w-full
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
                  hover:border-sky-400
                  hover:bg-sky-400
                  hover:text-black
                  hover:shadow-[0_0_24px_rgba(56,189,248,0.22)]
                "
              >
                VALIDATE MESSAGE
              </button>
            </form>

            {/* SUCCESS */}

            {submitted && (
              <div className="mt-7 rounded-xl border border-emerald-400 bg-black p-6">
                <p className="font-['Orbitron'] text-xs font-black tracking-[0.2em] text-emerald-400">
                  MESSAGE VALIDATED ✓
                </p>

                <p className="mt-3 text-base leading-7 text-white/80">
                  Validation complete. Continue to
                  your email application to send the
                  message.
                </p>

                <button
                  type="button"
                  onClick={openEmail}
                  className="
                    mt-5
                    rounded-lg
                    border
                    border-emerald-400
                    bg-emerald-400
                    px-5 py-3
                    font-['Orbitron']
                    text-xs
                    font-black
                    tracking-[0.15em]
                    text-black
                    transition
                    hover:bg-black
                    hover:text-emerald-400
                  "
                >
                  OPEN EMAIL APP ↗
                </button>
              </div>
            )}
          </div>
        </div>

        {/* =================================================
            END
        ================================================== */}

        <div className="mt-28 border-t border-white/20 pt-16">
          <p className="font-['Orbitron'] text-xs font-black tracking-[0.3em] text-sky-400">
            END OF CURRENT WORLD
          </p>

          <h3 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            THANKS FOR
            <br />
            ENTERING MY WORLD.
          </h3>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
            This world isn't finished yet. It grows
            alongside the things I learn and build.
          </p>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/55">
              © 2026 Bernardo F. Solero II
            </p>

            <a
              href="#home"
              className="font-['Orbitron'] text-xs font-black tracking-[0.2em] text-white transition hover:text-sky-400"
            >
              RETURN TO SPAWN ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact