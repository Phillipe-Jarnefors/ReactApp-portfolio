
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-wrapper">
      <h1>Next up tournaments</h1>
      <Link to="live-tournament">
        <h3>Watch the schedule</h3>
      </Link>
    </div>
  )
}
