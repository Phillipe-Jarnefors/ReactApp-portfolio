import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getLive } from "../api"
import { apiData, esportCat } from "../../dummyData"

import moment from "moment/moment"

export async function loader() {
  return await getLive()
}

export default function Tournaments() {
  const liveTournaments = useLoaderData()

  const liveElements = liveTournaments.events.map((live, index) => (
    <div className="live-event-wrapper" key={index + 1}>
      <div className="live-event-title">
        <h2>{live.tournament.category.name}</h2>
        <p>{live.status.type == "inprogress" ? "In Progress" : "Finished"}</p>
      </div>
      <div className="live-event-header">
        <h2>{live.homeScore.current}</h2>
        <div className="live-gameset">
          <h2>{live.status.description}</h2>
          <p>Best of {live.bestOf}</p>
        </div>
        <h2>{live.awayScore.current}</h2>
      </div>
      <p className="live-time">
        Match start:{" "}
        {moment(live.time.currentPeriodStartTimestamp * 1000).format(
          "hh:mm a (DD MMM YYYY) "
        )}
      </p>
      <div className="live-event-context">
        <div className="live-teams">
          <h2>{live.homeTeam.name}</h2>
          <h3>{live.homeTeam.country.name}</h3>
        </div>
        <h2 className="versus-text">VS</h2>
        <div className="live-teams">
          <h2>{live.awayTeam.name}</h2>
          <h3>
            {live.awayTeam.country.name
              ? live.awayTeam.country.name
              : "International"}
          </h3>
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      <Link className="go-back-link" to="..">
        &larr; Go back
      </Link>
      <div className="live-container">{liveElements}</div>
    </div>
  )
}
