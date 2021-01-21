import React from "react"
import howlTurnip from "./img/HowlTurnip.png"
import { useSpring, animated } from "react-spring"
import loadImage from "../landingPageTest"
import "./style.css"
import { Link } from "gatsby"
import { navigate } from "gatsby"
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

  let testImage = loadImage(howlTurnip)
  const isSSR = typeof window === "undefined"

  return (
    <>
      {!isSSR && (
        <div style={{ width: "100%", height: "50vh" }}>
          <animated.div
            key={1}
            className="script-bf-box"
            style={{
              transform: radians.interpolate(interp()),
              display: "inline-block",
            }}
          >
            <div style={{}}>
              <img src={testImage.read()} />
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
          <h2> I am your guide for your developer journey!!</h2>
          <h3>
            I have never code before, but the person who made this website has
            sometips to help you :p
          </h3>

          <button
            className={"button-fire"}
            onClick={() => {
              navigate("/homePage")
            }}
            type="button"
          >
            Let's Begin
          </button>
        </div>
      )}
    </>
  )
}

export default LandingPage
