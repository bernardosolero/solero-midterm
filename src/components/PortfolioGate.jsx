import { useState } from "react"
import MazeGame from "./MazeGame"
import Portfolio from "./Portfolio"

function PortfolioGate() {
  const [unlocked, setUnlocked] = useState(false)

  const unlockPortfolio = () => {
    setUnlocked(true)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!unlocked) {
    return (
      <MazeGame
        onComplete={unlockPortfolio}
        onSkip={unlockPortfolio}
      />
    )
  }

  return <Portfolio />
}

export default PortfolioGate