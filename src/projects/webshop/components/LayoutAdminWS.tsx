import React from "react"
import { Outlet } from "react-router-dom"
import AdminHomeWS from "../pages/admin/AdminHomeWS"

export default function LayoutAdminWS() {
  return (
    <div>
      <h1 className="text-primary mb-2">Welcome testson!</h1>
      <Outlet />
    </div>
  )
}
