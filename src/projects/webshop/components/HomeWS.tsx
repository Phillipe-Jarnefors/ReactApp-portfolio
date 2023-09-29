import { Carousel } from "antd"
import milo from "../../../images/milo.jpg"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useLayoutEffect } from "react"
const contentStyle: React.CSSProperties = {
  height: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export default function SwipeableTextMobileStepper() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <Carousel autoplay className="mb-12">
        <div style={contentStyle}>
          <img className="" style={contentStyle} src={milo} />
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <p className="text-font text-center">
        This project is a webshop prototype, brimming with true-to-life
        functionality, mirroring the experience of a genuine online retail
        platform.
      </p>
      <div className="flex items-center justify-center my-10">
        <Link to="./products">
          <Button variant="contained" disableRipple>
            TO SHOP
          </Button>
        </Link>
      </div>
    </>
  )
}
