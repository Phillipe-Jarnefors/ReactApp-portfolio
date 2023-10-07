import { Carousel } from "antd"

import { Link } from "react-router-dom"
import { useLayoutEffect, useState } from "react"

const contentStyle: React.CSSProperties = {
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 20,
  fontSize: "2rem",
  color: "#fefefe",
  textAlign: "center",
}

const carouselItems = [
  "Feel free to look around ...",
  "... and test the functionality",
  "MERN Fullstack Webshop.",
]

const loadingItems = [
  "Making burgers ...",
  "Cleaning up tables ...",
  "Waiting for guests ...",
]

export default function SwipeableTextMobileStepper() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  const [loading, setLoading] = useState(false)

  const animateLoading = () => {
    setLoading(true)
  }

  return (
    <>
      {!loading ? (
        <Carousel autoplay className="mb-6">
          {carouselItems.map((item) => (
            <div>
              <h3 style={contentStyle}>{item}</h3>
            </div>
          ))}
        </Carousel>
      ) : (
        <Carousel autoplay className="mb-6">
          {loadingItems.map((item) => (
            <div className="flex items-center flex-col">
              <h3 style={contentStyle}>
                {item}{" "}
                <div className="bg-abstract  border-[#61DBFB] h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-l-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              </h3>
            </div>
          ))}
        </Carousel>
      )}

      <div className="flex flex-col items-center justify-center my-6">
        {!loading ? (
          <>
            <p className="text-font text-center mb-6">
              This project is a webshop prototype, brimming with true-to-life
              functionality, mirroring the experience of a genuine online retail
              platform.
            </p>
            <Link to="./products">
              <button
                className="text-button rounded-md hover:bg-primary hover:text-abstract text-font outline px-5 lg:px-8 py-2 lg:py-5 mt-6 mb-6 md:mt-12"
                onClick={animateLoading}
              >
                TO WEBSHOP
              </button>
            </Link>
          </>
        ) : (
          <>
            <p className="text-font font-medium">Loading App ...</p>
            <p className="text-font">average wait time 5-10 sec</p>
          </>
        )}
      </div>
    </>
  )
}
