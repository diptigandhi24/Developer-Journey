import React from "react"
import howlTurnip from "./img/HowlTurnip.png"
import { useSpring, animated } from "react-spring"

const interp = () => r =>
  `translate3d(0, ${30 * Math.sin(r + (2 * Math.PI) / 1.6)}px, 0)`

const LandingPage = (): JSX.Element => {
  const { radians } = useSpring({
    to: async next => {
      let count = 0
      while (count < 1) {
        await next({ radians: 2 * Math.PI })
        count = count + 1
      }
    },
    from: { radians: 0 },
    config: { duration: 1500 },
    reset: true,
  })
  const [isImageLoaded, setLoaded] = React.useState(false)
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <animated.div
        key={1}
        className="script-bf-box"
        style={{
          transform: radians.interpolate(interp()),
          display: "inline-block",
        }}
      >
        <div style={{ visibility: isImageLoaded ? "visible" : "hidden" }}>
          <img src={howlTurnip} onLoad={() => setLoaded(true)} />
          <h1
            style={{
              position: "absolute",
              top: "15%",
              left: "10%",
              color: "white",
            }}
          >
            Hi There!!
          </h1>
        </div>
      </animated.div>
      {!isImageLoaded && (
        <div>
          <h1>Hello world</h1>
        </div>
      )}
    </div>
  )
}

export default LandingPage
