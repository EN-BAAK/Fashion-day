import React from "react"
import Main from "./components/Main"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FilteredProducts from "./components/filteredProducts/FilteredProducts"
import SingleProduct from "./components/filteredProducts/SingleProduct"

const App = (): React.JSX.Element => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Main />} />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />} />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
