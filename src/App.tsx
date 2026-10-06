import { Link, Route, Routes } from "react-router"
import UsersList from "./components/UsersList"
import Home from "./components/Home"
import UserDetail from "./components/UserDetail"

function App() {

  
  return (
    <div className='
        flex w-full 
        h-screen p-4 
        bg-purple-500/10
        '>

      <aside className="
      flex  
      w-72 
      h-full 
      bg-white 
      rounded-[2rem]
      ">
        aside
      </aside>

      <div className='flex-1 flex-col ml-4'>
        <nav className="
          flex items-center px-4
          bg-white rounded-[2rem] 
          h-20 sticky top-0 
          z-30 mb-4 gap-4
        ">
          <Link to="/" className="
            bg-indigo-600 hover:bg-indigo-700
            text-white font-bold
            py-3 px-6 rounded-full
            shadow-lg shadow-indigo-500/30
            transition-all transform hover :- translate-y-1
          ">
            Home
          </Link>
          
          <Link to="/users" className="
            bg-indigo-600 hover:bg-indigo-700
            text-white font-bold
            py-3 px-6 rounded-full
            shadow-lg shadow-indigo-500/30
            transition-all transform hover :- translate-y-1
          ">
            Users
          </Link>
          
        </nav>

        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:userId" element={<UserDetail />} />
          </Routes>
        </main>
      </div>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes> */}
    </div>
  )
}

export default App
