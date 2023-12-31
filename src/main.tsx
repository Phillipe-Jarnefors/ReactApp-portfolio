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
import NotFound from "./pages/NotFound"
import LayoutWS from "./projects/webshop/components/LayoutWS"
import HomeWS from "./projects/webshop/components/HomeWS"
import ProductsWS, {
  loader as productsLoader,
} from "./projects/webshop/pages/ProductsWS"
import ProductDetailWS, {
  loader as productDetailLoader,
} from "./projects/webshop/pages/ProductDetailWS"
import { CartProvider } from "./utils/CartContext"
import CheckoutWS from "./projects/webshop/pages/CheckoutWS"
import AdminHomeWS from "./projects/webshop/pages/admin/AdminHomeWS"
import AdminOrdersWS from "./projects/webshop/pages/admin/AdminOrdersWS"
import AdminProductsWS, {
  loader as adminLoader,
} from "./projects/webshop/pages/admin/AdminProductsWS"
import LayoutAdminWS from "./projects/webshop/components/LayoutAdminWS"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="webshop" element={<LayoutWS />}>
        <Route index element={<HomeWS />} />
        <Route
          path="products"
          element={<ProductsWS />}
          loader={productsLoader}
        />
        <Route
          path="products/:id"
          element={<ProductDetailWS />}
          loader={productDetailLoader}
        />
        <Route path="checkout" element={<CheckoutWS />} />
        <Route path="admin" element={<LayoutAdminWS />}>
          <Route index element={<AdminHomeWS />} />
          <Route path="orders" element={<AdminOrdersWS />} />
          <Route
            path="handle-products"
            element={<AdminProductsWS />}
            loader={adminLoader}
          />
        </Route>
      </Route>

      <Route
        path="live-tournament"
        element={<Tournaments />}
        loader={tournamentLoader}
      />
      <Route path="quiz" element={<Tournaments />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)
