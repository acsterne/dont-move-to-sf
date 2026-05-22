import { useEffect, useRef, useState } from 'react'
import './GameCanvas.css'

export default function GameCanvas({ children, topBar }) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function resize() {
      const scaleX = (window.innerWidth * 0.95) / 480
      const scaleY = (window.innerHeight * 0.95) / 640
      setScale(Math.min(scaleX, scaleY, 2))
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <div className="canvas-wrap">
      <div
        className="game-canvas"
        style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
      >
        {topBar && <div className="top-bar">{topBar}</div>}
        <div className="canvas-body">{children}</div>
      </div>
    </div>
  )
}
