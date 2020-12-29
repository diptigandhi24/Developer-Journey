import React from "react"
import "./homepage.css"
import { Snowfall, Snowflake } from "react-snowflakes"
import howlTurnip from "./img/HowlTurnip.png"
export default function HomePage() {
  let customWidth
  if (!window) {
    customWidth = window.screen.width
  }
  console.log("Browser width", customWidth)
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        zIndex: "1",
        display: "flex",
        justifyContent: "space-evenly",
        width: `${customWidth}`,
        height: "100%",
        color: "white",
        alignItems: "space-around",
        overflow: "scrollX",
      }}
    >
      <Snowfall
        count={100}
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          zIndex: "3",
          top: 0,
        }}
        snowflakeFactory={index => {
          const size = index / 100
          const w = 5 + 10 * size + "px"
          return (
            <Snowflake
              speed={0.05 + size * 2}
              xSpeedPrc={0.3 * size}
              ySpeedPrc={0.1 * size}
              style={{
                width: w,
                height: w,
                borderRadius: "50%",
                backgroundColor: "white",
                opacity: 0.2 + 0.8 * size,
                filter: `blur(${Math.round(Math.max(size - 0.5, 0) * 15)}px)`,
              }}
            />
          )
        }}
      />
      <div
        style={{
          width: `${customWidth}px`,
          textAlign: "center",
          backgroundColor: "#dbacdd",
          zIndex: "0",
        }}
      >
        <img src={howlTurnip} style={{ zIndex: "2" }} />
        <div
          style={{
            backgroundColor: "#6f0012",
            padding: "40px",
            border: "1px solid green",
            textAlign: "center",
            verticalAlign: "middle",
            width: "50%",
            margin: "0px 25%",
            fontSize: "40px",
          }}
        >
          You are developer at zeroth day
        </div>
      </div>
      <div
        style={{
          width: `${customWidth}px`,
          textAlign: "center",
          backgroundColor: "#dbacdd",
          zIndex: "0",
        }}
      >
        <img src={howlTurnip} style={{ zIndex: "2" }} />
        <div
          style={{
            backgroundColor: "#6f0012",
            padding: "40px",
            border: "1px solid green",
            textAlign: "center",
            verticalAlign: "middle",
            width: "50%",
            margin: "0px 25%",
            fontSize: "40px",
          }}
        >
          Start learning a language alongside framework
        </div>
      </div>
      <div
        style={{
          width: `${customWidth}px`,
          textAlign: "center",
          backgroundColor: "#dbacdd",
        }}
      >
        <img src={howlTurnip} style={{ zIndex: "2" }} />
        <div
          style={{
            backgroundColor: "#6f0012",
            padding: "40px",
            border: "1px solid green",
            textAlign: "center",
            verticalAlign: "middle",
            width: "50%",
            margin: "0px 25%",
            fontSize: "40px",
          }}
        >
          Don't hesitate to ask for help,
          <br />
          Don't judge and compare your code with anyone,
          <br />
          Believe in your learnings
        </div>
      </div>
      <div
        style={{
          width: `${customWidth}px`,
          textAlign: "center",
          backgroundColor: "#dbacdd",
        }}
      >
        <img src={howlTurnip} style={{ zIndex: "2" }} />
        <div
          style={{
            backgroundColor: "#6f0012",
            padding: "40px",
            border: "1px solid green",
            textAlign: "center",
            verticalAlign: "middle",
            width: "50%",
            margin: "0px 25%",
            fontSize: "40px",
          }}
        >
          Procastination is the part of the journey,
          <br />
        </div>
      </div>
      <div
        style={{
          width: `${customWidth}px`,
          textAlign: "center",
          backgroundColor: "#dbacdd",
        }}
      >
        <img src={howlTurnip} style={{ zIndex: "2" }} />
        <div
          style={{
            backgroundColor: "#6f0012",
            padding: "40px",
            border: "1px solid green",
            textAlign: "center",
            verticalAlign: "middle",
            width: "50%",
            margin: "0px 25%",
          }}
        >
          You are developer at zeroth day
        </div>
      </div>
      <div
        style={{
          width: `${customWidth}px`,
          textAlign: "center",
          backgroundColor: "#dbacdd",
        }}
      >
        <img src={howlTurnip} style={{ zIndex: "2" }} />
        <div
          style={{
            backgroundColor: "#6f0012",
            padding: "40px",
            border: "1px solid green",
            textAlign: "center",
            verticalAlign: "middle",
            width: "50%",
            margin: "0px 25%",
          }}
        >
          You are developer at zeroth day
        </div>
      </div>
      <div
        style={{
          width: `${customWidth}px`,
          textAlign: "center",
          backgroundColor: "#dbacdd",
        }}
      >
        <img src={howlTurnip} style={{ zIndex: "2" }} />
        <div
          style={{
            backgroundColor: "#6f0012",
            padding: "40px",
            border: "1px solid green",
            textAlign: "center",
            verticalAlign: "middle",
            width: "50%",
            margin: "0px 25%",
          }}
        >
          You are developer at zeroth day
        </div>
      </div>
      <div
        style={{
          width: `${customWidth}px`,
          textAlign: "center",
          backgroundColor: "#dbacdd",
        }}
      >
        <img src={howlTurnip} style={{ zIndex: "2" }} />
        <div
          style={{
            backgroundColor: "#6f0012",
            padding: "40px",
            border: "1px solid green",
            textAlign: "center",
            verticalAlign: "middle",
            width: "50%",
            margin: "0px 25%",
          }}
        >
          You are developer at zeroth day
        </div>
      </div>
      <div
        style={{
          width: `${customWidth}px`,
          textAlign: "center",
          backgroundColor: "#dbacdd",
        }}
      >
        <img src={howlTurnip} style={{ zIndex: "2" }} />
        <div
          style={{
            backgroundColor: "#6f0012",
            padding: "40px",
            border: "1px solid green",
            textAlign: "center",
            verticalAlign: "middle",
            width: "50%",
            margin: "0px 25%",
          }}
        >
          You are developer at zeroth day
        </div>
      </div>
    </div>
  )
}
