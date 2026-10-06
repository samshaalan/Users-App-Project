import { Search } from "lucide-react"
import { Link } from "react-router";



const FloatingHeader = () => {
  return (
    
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

          <Link to="/roles" className="
              bg-indigo-600 hover:bg-indigo-700
              text-white font-bold
              py-3 px-6 rounded-full
              shadow-lg shadow-indigo-500/30
              transition-all transform hover :- translate-y-1
            ">
              Roles
          </Link>
          
          <div className='flex p-3 border  w-full rounded-full border-slate-100'> 
            <Search></Search>
            <input type='text' className="w-full outline-none ml4"></input>
          </div>
      </nav>      
  )
}

export default FloatingHeader;