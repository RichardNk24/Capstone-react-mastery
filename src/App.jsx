import { Routes, Route, Outlet } from "react-router-dom"
import Home from "./routes/home/Home.component"
import Navigation from "./routes/navigation/Navigation.component"
import SignIn from './routes/sign-in/Sign_in.component'
const App = () => {


  const Shop = () => {
    return <h1>Shop Page</h1> 
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
      
    </Routes>
  )
}

export default App
