import { Search } from "lucide-react"



const FloatingHeader = () => {
  return (
    <header className="
      flex
      items-center
      px-4
      bg-white 
      rounded-[2rem] 
      h-20
      ml-4
      sticky
      top-0
      z-30
      mb-4
      ">
        <div className='flex p-3 border  w-full rounded-full border-slate-100'> 
          <Search></Search>
          <input type='text' className="w-full outline-none ml4"></input>
        </div>
      
    </header>
  )
}

export default FloatingHeader;