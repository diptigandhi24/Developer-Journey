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
    <animated.div
      key={1}
      className="script-bf-box"
      style={{
        transform: radians.interpolate(interp()),
        display: "inline-block",
      }}
    >
      <div style={{ display: isImageLoaded ? "visible" : "hidden" }}>
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
      {!isImageLoaded && <div>Hello world</div>}
    </animated.div>
  )
}

export default LandingPage
