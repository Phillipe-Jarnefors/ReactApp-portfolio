
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="bg-background  px-6 pt-6">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
