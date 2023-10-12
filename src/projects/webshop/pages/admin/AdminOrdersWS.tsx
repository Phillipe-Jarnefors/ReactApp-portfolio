import { Icon } from "@iconify/react/dist/iconify.js"

import { Link } from "react-router-dom"

export default function AdminOrdersWS() {
  return (
    <div className="h-40 flex flex-col items-center">
      <Link to=".." className="pt-10">
        <Icon
          icon="pajamas:go-back"
          color="#61dbfb"
          className="w-smallBtn h-smallBtn"
        />
      </Link>
      <h1 className="text-font text-xl text-center">
        This feature is coming soon!
      </h1>
    </div>
  )
}
