import React, { useEffect, useState } from "react"
// import LandingPage from "./landingPage"

const LandingPage = React.lazy(() => {
  return Promise.all([
    import("./landingPage"),
    new Promise(resolve => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports)
})

function HoldSpace() {
  return (
    <div className="rainbowWrapper">
      <h1 className="rainbow-text letter" data-text="Hello World...">
        Hello World...
      </h1>
    </div>
  )
}

export default function Home() {
  console.log("Index")
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<HoldSpace />}>
          <div
            style={{
              backgroundColor: "#fd6c9e",
              textAlign: "center",
              height: "100vh",
              verticalAlign: "middle",
              padding: "40px",
              width: "100wh",
            }}
          >
            <LandingPage />
          </div>
        </React.Suspense>
      )}
    </>
  )
}
