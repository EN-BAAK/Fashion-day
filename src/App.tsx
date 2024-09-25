import React from "react"
import Main from "./components/Main"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FilteredProducts from "./components/filteredProducts/FilteredProducts"

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
        </Routes>
      </Router>
    </div>
  )
}

export default App
