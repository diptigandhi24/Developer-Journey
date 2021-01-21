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
      <h1 className="rainbow-text letter">Hello World...</h1>
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
          <LandingPage />
        </React.Suspense>
      )}
    </>
  )
}
