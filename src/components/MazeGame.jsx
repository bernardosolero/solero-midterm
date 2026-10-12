import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

/* =========================================================
   MAZE LEGEND

   -1 = EMPTY / VOID
    0 = WALKABLE FLOOR
    1 = WALL
    2 = SECRET DOOR
    3 = CORRUPTION / TRAP
    4 = SECRET CAVE ROUTE
   ========================================================= */

const maze = [
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
  ],

  [
    1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1,
  ],

  [
    1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1,
  ],

  [
    1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1,
  ],

  [
    1, 0, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
  ],

  [
    1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3, 0, 0, 0, 0, 0, 1,
  ],

  [
    1, 1, 1, 1, 1, 1, 1, 1, 2,
    1, 1, 1, 4, 1, 1, 1, 1,
  ],

  [
    -1, -1, -1, -1, -1, -1, -1,
    -1, 4, -1, -1, -1, 4, -1,
    -1, -1, -1,
  ],

  [
    -1, -1, -1, -1, -1, -1, -1,
    -1, 4, 4, 4, 4, 4, -1,
    -1, -1, -1,
  ],
]

const startPosition = {
  row: 1,
  col: 1,
}

const exitPosition = {
  row: 5,
  col: 15,
}

const secretDoorPosition = {
  row: 6,
  col: 8,
}

/* =========================================================
   PLAYER ICON
   ========================================================= */

function PlayerIcon() {
  return (
    <div
      className="
        relative
        h-[16px]
        w-[12px]
        sm:h-8
        sm:w-6
      "
    >
      {/* HEAD */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[4px]
          w-[4px]

          -translate-x-1/2

          rounded-full
          bg-sky-400

          sm:h-2
          sm:w-2
        "
      />

      {/* BODY */}
      <div
        className="
          absolute
          left-1/2
          top-[4px]

          h-[7px]
          w-[3px]

          -translate-x-1/2

          bg-sky-400

          sm:top-2
          sm:h-3.5
          sm:w-1.5
        "
      />

      {/* ARMS */}
      <div
        className="
          absolute
          left-1/2
          top-[6px]

          h-[2px]
          w-[10px]

          -translate-x-1/2

          bg-sky-400

          sm:top-3
          sm:h-1
          sm:w-5
        "
      />

      {/* LEFT LEG */}
      <div
        className="
          absolute
          bottom-0
          left-[28%]

          h-[6px]
          w-[2px]

          bg-sky-400

          sm:h-2.5
          sm:w-1
        "
      />

      {/* RIGHT LEG */}
      <div
        className="
          absolute
          bottom-0
          right-[28%]

          h-[6px]
          w-[2px]

          bg-sky-400

          sm:h-2.5
          sm:w-1
        "
      />
    </div>
  )
}

/* =========================================================
   SECRET DOOR ICON
   ========================================================= */

function DoorIcon() {
  return (
    <div
      className="
        relative
        h-[13px]
        w-[9px]

        border
        border-sky-400

        bg-black

        sm:h-7
        sm:w-5
        sm:border-2
      "
    >
      <span
        className="
          absolute
          right-[1px]
          top-1/2

          h-[2px]
          w-[2px]

          -translate-y-1/2

          rounded-full
          bg-sky-400

          sm:right-1
          sm:h-1
          sm:w-1
        "
      />
    </div>
  )
}

/* =========================================================
   DIRECTION BUTTON

   Tap = one move
   Hold = repeated movement
   ========================================================= */

function DirectionButton({
  symbol,
  direction,
  onStart,
  onStop,
}) {
  const handlePointerDown = (event) => {
    event.preventDefault()

    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(
        event.pointerId
      )
    }

    onStart(direction)
  }

  return (
    <button
      type="button"

      onPointerDown={handlePointerDown}
      onPointerUp={onStop}
      onPointerCancel={onStop}
      onLostPointerCapture={onStop}

      onContextMenu={(event) =>
        event.preventDefault()
      }

      className="
        hud-button

        flex
        h-14
        w-14

        select-none
        items-center
        justify-center

        rounded-xl

        border
        border-white/40

        bg-black

        font-['Orbitron']
        text-lg
        font-black
        text-white

        shadow-[0_0_0_rgba(56,189,248,0)]

        transition

        hover:border-sky-400
        hover:text-sky-400

        active:scale-95
        active:border-sky-400
        active:bg-sky-400/10
        active:text-sky-400

        sm:h-16
        sm:w-16
        sm:text-xl
      "

      style={{
        touchAction: "none",
      }}
    >
      {symbol}
    </button>
  )
}

/* =========================================================
   MAIN GAME
   ========================================================= */

function MazeGame({
  onComplete,
  onSkip,
}) {
  const [player, setPlayer] =
    useState(startPosition)

  const [moves, setMoves] =
    useState(0)

  const [attempt, setAttempt] =
    useState(1)

  const [dead, setDead] =
    useState(false)

  const [won, setWon] =
    useState(false)

  const [trapRevealed, setTrapRevealed] =
    useState(false)

  const [
    caveDiscovered,
    setCaveDiscovered,
  ] = useState(false)

  /* =========================================================
     REFS

     These let held buttons always use the newest game state.
     ========================================================= */

  const playerRef =
    useRef(startPosition)

  const deadRef =
    useRef(false)

  const wonRef =
    useRef(false)

  const caveDiscoveredRef =
    useRef(false)

  const holdDelayRef =
    useRef(null)

  const holdIntervalRef =
    useRef(null)

  /* =========================================================
     UPDATE PLAYER
     ========================================================= */

  const updatePlayer = useCallback(
    (position) => {
      playerRef.current = position

      setPlayer(position)
    },
    []
  )

  /* =========================================================
     MOVEMENT
     ========================================================= */

  const movePlayer = useCallback(
    (direction) => {
      if (
        deadRef.current ||
        wonRef.current
      ) {
        return
      }

      const current =
        playerRef.current

      let newRow =
        current.row

      let newCol =
        current.col

      if (direction === "up") {
        newRow -= 1
      }

      if (direction === "down") {
        newRow += 1
      }

      if (direction === "left") {
        newCol -= 1
      }

      if (direction === "right") {
        newCol += 1
      }

      const nextCell =
        maze[newRow]?.[newCol]

      /* OUTSIDE MAP */
      if (nextCell === undefined) {
        return
      }

      /* VOID */
      if (nextCell === -1) {
        return
      }

      /* WALL */
      if (nextCell === 1) {
        return
      }

      /* =====================================================
         SECRET DOOR
      ====================================================== */

      if (nextCell === 2) {
        caveDiscoveredRef.current = true

        setCaveDiscovered(true)

        setMoves(
          (currentMoves) =>
            currentMoves + 1
        )

        updatePlayer({
          row: newRow,
          col: newCol,
        })

        return
      }

      /* =====================================================
         SECRET CAVE

         Cannot enter until secret door is discovered.
      ====================================================== */

      if (
        nextCell === 4 &&
        !caveDiscoveredRef.current
      ) {
        return
      }

      setMoves(
        (currentMoves) =>
          currentMoves + 1
      )

      updatePlayer({
        row: newRow,
        col: newCol,
      })

      /* =====================================================
         TRAP
      ====================================================== */

      if (nextCell === 3) {
        setTrapRevealed(true)

        deadRef.current = true

        setDead(true)

        return
      }

      /* =====================================================
         EXIT
      ====================================================== */

      if (
        newRow === exitPosition.row &&
        newCol === exitPosition.col
      ) {
        wonRef.current = true

        setWon(true)
      }
    },
    [updatePlayer]
  )

  /* =========================================================
     HOLD CONTROLS

     First:
     move once immediately.

     Then:
     wait a little so normal taps remain normal taps.

     After:
     repeat movement approximately every 110 ms.
     ========================================================= */

  const stopHold =
    useCallback(() => {
      if (holdDelayRef.current) {
        clearTimeout(
          holdDelayRef.current
        )

        holdDelayRef.current = null
      }

      if (holdIntervalRef.current) {
        clearInterval(
          holdIntervalRef.current
        )

        holdIntervalRef.current = null
      }
    }, [])

  const startHold =
    useCallback(
      (direction) => {
        stopHold()

        /* TAP / FIRST MOVE */
        movePlayer(direction)

        /* WAIT BEFORE REPEATING */
        holdDelayRef.current =
          setTimeout(() => {
            holdIntervalRef.current =
              setInterval(() => {
                movePlayer(direction)
              }, 110)
          }, 230)
      },
      [
        movePlayer,
        stopHold,
      ]
    )

  /* =========================================================
     STOP HOLD IF GAME ENDS
     ========================================================= */

  useEffect(() => {
    if (dead || won) {
      stopHold()
    }
  }, [
    dead,
    won,
    stopHold,
  ])

  /* =========================================================
     CLEANUP TIMERS
     ========================================================= */

  useEffect(() => {
    return () => {
      stopHold()
    }
  }, [stopHold])

  /* =========================================================
     KEYBOARD CONTROLS

     Browser key-repeat already makes holding WASD/arrows repeat.
     ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key =
        event.key.toLowerCase()

      const controls = {
        arrowup: "up",
        w: "up",

        arrowdown: "down",
        s: "down",

        arrowleft: "left",
        a: "left",

        arrowright: "right",
        d: "right",
      }

      const direction =
        controls[key]

      if (!direction) {
        return
      }

      event.preventDefault()

      movePlayer(direction)
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    )

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      )
    }
  }, [movePlayer])

  /* =========================================================
     RESTART
     ========================================================= */

  const restartGame = () => {
    stopHold()

    const startingPoint = {
      ...startPosition,
    }

    playerRef.current =
      startingPoint

    deadRef.current = false

    wonRef.current = false

    caveDiscoveredRef.current =
      false

    setPlayer(startingPoint)

    setMoves(0)

    setDead(false)

    setWon(false)

    setCaveDiscovered(false)

    setAttempt(
      (currentAttempt) =>
        currentAttempt + 1
    )
  }

  /* =========================================================
     VISIBLE MAP

     Secret cave is physically revealed only after discovery.
     ========================================================= */

  const visibleMaze =
    caveDiscovered
      ? maze
      : maze.slice(0, 7)

  return (
    <section className="min-h-screen bg-black px-3 py-6 text-white sm:px-6 sm:py-10 lg:py-12">

      <div className="mx-auto w-full max-w-6xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="border-b border-white/30 pb-6">

          <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.25em] text-white/65 sm:text-xs sm:tracking-[0.35em]">
            BERNARDO SOLERO // WORLD GATE
          </p>

          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="font-['Orbitron'] text-[10px] font-black tracking-[0.28em] text-sky-400 sm:text-xs">
                CHALLENGER DETECTED
              </p>

              <h1 className="mt-3 font-['Orbitron'] text-[26px] font-black leading-tight text-white sm:text-5xl">
                I'M TESTING YOU.
              </h1>

              <p className="mt-4 text-sm font-semibold leading-6 text-white sm:text-lg sm:leading-7">
                You want access to my world?
                Reach the exit.
              </p>

              <p className="mt-1 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                Pay attention. The obvious answer
                isn't always the right one.
              </p>

            </div>

            {/* ATTEMPT / MOVES */}

            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-xl border border-white/30 bg-black p-4 text-center">

                <p className="font-['Orbitron'] text-[8px] font-black tracking-[0.22em] text-white/60 sm:text-[9px]">
                  ATTEMPT
                </p>

                <p className="mt-2 font-['Orbitron'] text-2xl font-black text-white">
                  {String(
                    attempt
                  ).padStart(
                    2,
                    "0"
                  )}
                </p>

              </div>

              <div className="rounded-xl border border-white/30 bg-black p-4 text-center">

                <p className="font-['Orbitron'] text-[8px] font-black tracking-[0.22em] text-white/60 sm:text-[9px]">
                  MOVES
                </p>

                <p className="mt-2 font-['Orbitron'] text-2xl font-black text-white">
                  {String(
                    moves
                  ).padStart(
                    2,
                    "0"
                  )}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            PLAYING
        ====================================================== */}

        {!dead && !won && (
          <>

            {/* AFTER FIRST DEATH */}
            {trapRevealed &&
              !caveDiscovered && (
                <div className="mt-5 rounded-xl border border-sky-400/60 bg-black px-4 py-3 text-center">

                  <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.25em] text-sky-400 sm:text-xs">
                    HINT // WALLS LIE.
                  </p>

                </div>
              )}

            {/* SECRET FOUND */}
            {caveDiscovered && (
              <div className="mt-5 rounded-xl border border-sky-400/60 bg-black px-4 py-3 text-center">

                <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.22em] text-sky-400 sm:text-xs">
                  HIDDEN ROUTE DISCOVERED
                </p>

              </div>
            )}

            {/* =================================================
                RESPONSIVE MAZE

                NO min-width.
                NO horizontal scrolling.

                All 17 columns automatically fit available width.
            ================================================== */}

            <div className="mx-auto mt-7 w-full max-w-[800px]">

              <div
                className="
                  grid
                  w-full
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/60
                  bg-black
                "
                style={{
                  gridTemplateColumns:
                    `repeat(${maze[0].length}, minmax(0, 1fr))`,
                }}
              >
                {visibleMaze.map(
                  (
                    row,
                    rowIndex
                  ) =>
                    row.map(
                      (
                        cell,
                        colIndex
                      ) => {
                        const isPlayer =
                          player.row ===
                            rowIndex &&
                          player.col ===
                            colIndex

                        const isExit =
                          exitPosition.row ===
                            rowIndex &&
                          exitPosition.col ===
                            colIndex

                        const isSecretDoor =
                          secretDoorPosition.row ===
                            rowIndex &&
                          secretDoorPosition.col ===
                            colIndex

                        const isTrap =
                          cell === 3

                        const isCave =
                          cell === 4

                        const isVoid =
                          cell === -1

                        let tileClass =
                          "border border-white/15 bg-black"

                        /* WALL */
                        if (
                          cell === 1
                        ) {
                          tileClass =
                            "border border-black bg-white"
                        }

                        /* VOID */
                        if (
                          isVoid
                        ) {
                          tileClass =
                            "border border-transparent bg-black"
                        }

                        /* SECRET DOOR LOOKS LIKE WALL */
                        if (
                          isSecretDoor &&
                          !caveDiscovered
                        ) {
                          tileClass =
                            "border border-black bg-white"
                        }

                        /* DISCOVERED DOOR */
                        if (
                          isSecretDoor &&
                          caveDiscovered
                        ) {
                          tileClass =
                            "border border-sky-400 bg-black"
                        }

                        /* SECRET ROUTE */
                        if (
                          isCave &&
                          caveDiscovered
                        ) {
                          tileClass =
                            "border border-sky-400/50 bg-sky-400/10"
                        }

                        /* TRAP HIDDEN */
                        if (
                          isTrap &&
                          !trapRevealed
                        ) {
                          tileClass =
                            "border border-white/15 bg-black"
                        }

                        /* TRAP REVEALED */
                        if (
                          isTrap &&
                          trapRevealed
                        ) {
                          tileClass =
                            "border border-red-500 bg-red-500"
                        }

                        return (
                          <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`
                              relative

                              flex
                              aspect-square
                              min-w-0

                              items-center
                              justify-center

                              ${tileClass}
                            `}
                          >
                            {/* SECRET ROUTE MARK */}
                            {isCave &&
                              caveDiscovered &&
                              !isPlayer && (
                                <span className="text-[7px] font-black text-sky-400 sm:text-xs">
                                  ·
                                </span>
                              )}

                            {/* SECRET DOOR */}
                            {isSecretDoor &&
                              caveDiscovered &&
                              !isPlayer && (
                                <DoorIcon />
                              )}

                            {/* CORRUPTION */}
                            {isTrap &&
                              trapRevealed &&
                              !isPlayer && (
                                <span className="font-['Orbitron'] text-[9px] font-black text-white sm:text-xl">
                                  X
                                </span>
                              )}

                            {/* EXIT */}
                            {isExit &&
                              !isPlayer && (
                                <span className="font-['Orbitron'] text-[8px] font-black text-emerald-400 sm:text-lg">
                                  E
                                </span>
                              )}

                            {/* PLAYER */}
                            {isPlayer && (
                              <PlayerIcon />
                            )}

                          </div>
                        )
                      }
                    )
                )}
              </div>

            </div>

            {/* =================================================
                LEGEND
            ================================================== */}

            <div className="mx-auto mt-5 flex max-w-[800px] flex-wrap justify-center gap-x-5 gap-y-3 border-y border-white/25 py-4">

              <span className="font-['Orbitron'] text-[8px] font-black tracking-[0.16em] text-sky-400 sm:text-[10px]">
                PLAYER
              </span>

              <span className="font-['Orbitron'] text-[8px] font-black tracking-[0.16em] text-emerald-400 sm:text-[10px]">
                E // EXIT
              </span>

              {trapRevealed && (
                <span className="font-['Orbitron'] text-[8px] font-black tracking-[0.16em] text-red-500 sm:text-[10px]">
                  X // CORRUPTION
                </span>
              )}

              {caveDiscovered && (
                <span className="font-['Orbitron'] text-[8px] font-black tracking-[0.16em] text-sky-400 sm:text-[10px]">
                  SECRET ROUTE
                </span>
              )}

            </div>

            {/* =================================================
                CONTROLS
            ================================================== */}

            <div className="mt-8 text-center">

              <p className="font-['Orbitron'] text-[8px] font-black tracking-[0.22em] text-white/60 sm:text-[10px]">
                WASD // ARROW KEYS // TOUCH
              </p>

              <p className="mt-2 text-xs font-medium text-sky-400">
                TAP OR HOLD TO MOVE
              </p>

              <div className="mx-auto mt-5 grid w-[184px] grid-cols-3 place-items-center gap-2 sm:w-[208px]">

                <div />

                <DirectionButton
                  symbol="↑"
                  direction="up"
                  onStart={
                    startHold
                  }
                  onStop={
                    stopHold
                  }
                />

                <div />

                <DirectionButton
                  symbol="←"
                  direction="left"
                  onStart={
                    startHold
                  }
                  onStop={
                    stopHold
                  }
                />

                <DirectionButton
                  symbol="↓"
                  direction="down"
                  onStart={
                    startHold
                  }
                  onStop={
                    stopHold
                  }
                />

                <DirectionButton
                  symbol="→"
                  direction="right"
                  onStart={
                    startHold
                  }
                  onStop={
                    stopHold
                  }
                />

              </div>

            </div>

            {/* ACTIONS */}

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <button
                type="button"
                onClick={
                  restartGame
                }
                className="
                  hud-button

                  rounded-xl

                  border
                  border-white/40

                  bg-black

                  px-5 py-3

                  font-['Orbitron']
                  text-[9px]
                  font-black
                  tracking-[0.16em]
                  text-white

                  transition

                  hover:border-sky-400
                  hover:text-sky-400
                "
              >
                RESET TEST
              </button>

              <button
                type="button"
                onClick={
                  onSkip
                }
                className="
                  rounded-xl

                  border
                  border-white/25

                  bg-black

                  px-5 py-3

                  font-['Orbitron']
                  text-[9px]
                  font-black
                  tracking-[0.16em]
                  text-white/70

                  transition

                  hover:border-white
                  hover:text-white
                "
              >
                BYPASS
              </button>

            </div>

          </>
        )}

        {/* =====================================================
            ACCESS DENIED
        ====================================================== */}

        {dead && (
          <div className="mt-8 rounded-2xl border-2 border-red-500 bg-black p-7 text-center sm:p-14">

            <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.3em] text-red-500 sm:text-xs">
              TEST RESULT
            </p>

            <h2 className="mt-5 font-['Orbitron'] text-3xl font-black text-red-500 sm:text-7xl">
              ACCESS DENIED
            </h2>

            <p className="mt-5 text-base font-semibold text-white sm:text-lg">
              Not good enough.
            </p>

            <div className="my-7 space-y-2">

              <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.12em] text-red-500 sm:text-xs">
                &gt; CORRUPTION DETECTED
              </p>

              <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.12em] text-red-500 sm:text-xs">
                &gt; PLAYER ELIMINATED
              </p>

              <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.12em] text-red-500 sm:text-xs">
                &gt; TEST FAILED
              </p>

            </div>

            <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.24em] text-sky-400 sm:text-xs">
              HINT // WALLS LIE.
            </p>

            <button
              type="button"
              onClick={
                restartGame
              }
              className="
                mt-7

                rounded-xl

                border
                border-red-500

                bg-red-500

                px-7 py-4

                font-['Orbitron']
                text-[10px]
                font-black
                tracking-[0.16em]
                text-black

                transition

                hover:bg-black
                hover:text-red-500
              "
            >
              TRY AGAIN
            </button>

          </div>
        )}

        {/* =====================================================
            ACCESS GRANTED
        ====================================================== */}

        {won && (
          <div className="mt-8 rounded-2xl border-2 border-emerald-400 bg-black p-7 text-center sm:p-14">

            <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.3em] text-emerald-400 sm:text-xs">
              TEST RESULT
            </p>

            <h2 className="mt-5 font-['Orbitron'] text-3xl font-black text-emerald-400 sm:text-7xl">
              ACCESS GRANTED
            </h2>

            <p className="mt-5 text-base font-semibold text-white sm:text-lg">
              You found what most people miss.
            </p>

            <div className="my-7 space-y-2">

              <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.12em] text-emerald-400 sm:text-xs">
                &gt; CHALLENGER VERIFIED
              </p>

              <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.12em] text-emerald-400 sm:text-xs">
                &gt; WORLD GATE UNLOCKED
              </p>

              <p className="font-['Orbitron'] text-[9px] font-black tracking-[0.12em] text-emerald-400 sm:text-xs">
                &gt; WELCOME, PLAYER
              </p>

            </div>

            <p className="text-sm text-white/75 sm:text-base">
              Test completed in {moves} moves.
            </p>

            <button
              type="button"
              onClick={
                onComplete
              }
              className="
                mt-7

                rounded-xl

                border
                border-emerald-400

                bg-emerald-400

                px-8 py-4

                font-['Orbitron']
                text-[10px]
                font-black
                tracking-[0.16em]
                text-black

                transition

                hover:bg-black
                hover:text-emerald-400
              "
            >
              ENTER MY WORLD
            </button>

          </div>
        )}

      </div>

    </section>
  )
}

export default MazeGame