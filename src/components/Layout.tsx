
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="bg-background min-h-screen flex flex-col justify-between">
      <div className="pt-6 px-6 md:px-10 lg:px-32 2xl:px-96">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
