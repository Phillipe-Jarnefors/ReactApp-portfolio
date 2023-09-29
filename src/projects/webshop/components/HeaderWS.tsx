import { Link } from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import { Badge } from "@mui/material"

export default function HeaderWS() {
  return (
    <div className="border-t-2 border-abstract text-xl flex gap-2 items-center fixed w-full px-6 py-6 mt-8 xl:px-12 z-10 top-12 left-0 bg-background">
      <h1 className="text-primary hover:cursor-pointer mr-auto">
        <Link to=".">Burg!</Link>
      </h1>

      <AdminPanelSettingsIcon className="text-primary" />
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon className="text-primary" />
      </Badge>
    </div>
  )
}
