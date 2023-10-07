import { Outlet } from "react-router-dom"

export default function LayoutAdminWS() {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-primary">Welcome testson!</h1>
        <h2 className="text-font border-2 border-font px-2 rounded">Logout</h2>
      </div>
      <Outlet />
    </div>
  )
}
