import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Tournaments, { loader as tournamentLoader } from "./pages/Tournaments"
import QuizProject from "./projects/quiz/QuizProject"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="live-tournament"
        element={<Tournaments />}
        loader={tournamentLoader}
      /> 
      <Route 
        path="quiz"
        element={<QuizProject />}  
      />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
