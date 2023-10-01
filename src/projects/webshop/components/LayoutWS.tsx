import { Outlet } from "react-router-dom"
import HeaderWS from "./HeaderWS"

export default function LayoutWS() {
  return (
    <div className="bg-background min-h-screen flex flex-col justify-between">
      <div className="pt-2 md:px-10 lg:px-32 2xl:px-96">
        <HeaderWS />
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
