import { Link, Route, Routes } from "react-router"
import UsersList from "./components/UsersList"
import Home from "./components/Home"
import UserDetail from "./components/UserDetail"
import Sidebar from "./components/Sidebar"
import FloatingHeader from "./components/FloatingHeader"

function App() {

  
  return (
    <div className='
        flex w-full 
        h-screen overflow-hidden p-4 
        bg-purple-500/10
        '>

      <Sidebar />

      <div className='ml-4 flex min-w-0 flex-1 flex-col'>      
        <FloatingHeader />
        <main className="min-h-0 flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:userId" element={<UserDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
