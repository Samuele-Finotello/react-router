import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import DefaultLayout from "./layouts/DefaultLayout"
import ProductDetail from "./pages/ProductDetail"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
