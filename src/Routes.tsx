import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import { Catalog } from "./pages/Catalog"
import { Cart } from "./pages/Cart"
  
export function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      
    </Router>
  )
}