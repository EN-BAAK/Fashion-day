import React from "react"
import Main from "./components/Main"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FilteredProducts from "./components/filteredProducts/FilteredProducts"
import SingleProduct from "./components/filteredProducts/SingleProduct"
import Login from "./components/Login/Login"
import { useSelector } from "react-redux"
import { AuthStateType } from "./misc/types"

const App = (): React.JSX.Element => {
  const user = useSelector((state: { user: AuthStateType }) => state.user.user)
  const { authUser } = user

  return (
    <div className="App">
      <Router>
        <Routes>
          {authUser ? (
            <React.Fragment>
              <Route
                path="/"
                element={<Main />} />
              <Route
                path="/filteredProducts/:type"
                element={<FilteredProducts />} />
              <Route
                path="/filteredProducts/:type/:id"
                element={<SingleProduct />} />
            </React.Fragment>
          ) : <Route
            path="/"
            element={<Login />}
          />}
        </Routes>
      </Router>
    </div>
  )
}

export default App
