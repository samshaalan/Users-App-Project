import { Link, Route, Routes } from "react-router"
import UsersList from "./UsersList"
import Home from "./Home"
import UserDetail from "./UserDetail"

function App() {

  
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/users">Users </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </>
  )
}

export default App
