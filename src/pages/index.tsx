import React, { useEffect, useState } from "react"
import LandingPage from "./landingPage"
import "./style.css"
import { Link } from "gatsby"
import { navigate } from "gatsby"
export default function Home() {
  console.log("Index")

  return (
    <div
      style={{
        backgroundColor: "#fd6c9e",
        textAlign: "center",
        height: "100vh",
        verticalAlign: "middle",
        padding: "40px",
      }}
    >
      <LandingPage />
      <h2> I am your guide for your developer journey!!</h2>
      <h3>
        I have never code before, but the person who made this website has
        sometips to help you :p
      </h3>

      {/* <Link to="/homePage/"> */}
      <button
        className={"button-fire"}
        onClick={() => {
          navigate("/homePage")
        }}
      >
        Let's Begin
      </button>
      {/* </Link> */}
    </div>
  )
}