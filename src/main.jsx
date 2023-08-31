import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Tournaments, { loader as tournamentLoader } from "./pages/Tournaments"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="live-tournament"
        element={<Tournaments />}
        loader={tournamentLoader}
      />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
