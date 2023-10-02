import { Carousel } from "antd"

import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useEffect, useLayoutEffect, useState } from "react"
import LoadingButton from "@mui/lab/LoadingButton"
import SendIcon from "@mui/icons-material/Send"

const contentStyle: React.CSSProperties = {
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  color: "#fefefe",
  textAlign: "center",
}

const carouselItems = [
  "Feel free to look around ...",
  "... and test the functionality",
  "MERN Fullstack Webshop.",
]

export default function SwipeableTextMobileStepper() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const [loading, setLoading] = useState(false)

  const animateLoading = () => {
    setLoading(true)
  }

  return (
    <>
      <Carousel autoplay className="mb-12">
        {carouselItems.map((item) => (
          <div>
            <h3 style={contentStyle}>{item}</h3>
          </div>
        ))}
      </Carousel>
      <p className="text-font text-center">
        This project is a webshop prototype, brimming with true-to-life
        functionality, mirroring the experience of a genuine online retail
        platform.
      </p>
      <div className="flex items-center justify-center my-10">
        {!loading ? (
          <button onClick={animateLoading}>
            <Link to="./products">
              <Button variant="contained" disableRipple>
                TO WEBSHOP
              </Button>
            </Link>
          </button>
        ) : (
          <LoadingButton
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            <span>Loading</span>
          </LoadingButton>
        )}
      </div>
    </>
  )
}
