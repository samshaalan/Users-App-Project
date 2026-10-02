import { Link, Route, Routes } from "react-router"
import Users from "./Users"
import Home from "./Home"

function App() {

  
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/users"> Users </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
