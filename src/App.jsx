import { Routes, Route, Outlet } from "react-router-dom"
import Home from "./components/routes/home/Home.component"
const App = () => {
  
  const Navigation = () => {
      return (
        <div>
          <div>
            <h1>I am the navigation bar</h1>
          </div>
          <Outlet />
        </div>
      )
    
  }

  const Shop = () => {
    return <h1>Shop Page</h1> 
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
      
    </Routes>
  )
}

export default App
