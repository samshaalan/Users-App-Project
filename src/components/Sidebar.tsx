import { useState } from "react"
import { ChevronDown, Users as UsersIcon } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router"
import { fetchAllUsers } from "../api/fetchData"

const Sidebar = () => {
  const [isUsersExpanded, setIsUsersExpanded] = useState(false)
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchAllUsers,
    staleTime: 1000 * 60 * 60,
  })

  return (
    <aside className="flex h-full min-h-0 w-72 flex-col rounded-[2rem] bg-white p-4">
      <button
        type="button"
        onClick={() => setIsUsersExpanded((expanded) => !expanded)}
        aria-expanded={isUsersExpanded}
        className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left font-semibold text-slate-700 transition-colors hover:bg-indigo-50"
      >
        <UsersIcon size={20} aria-hidden="true" />
        <span className="flex-1">All Users</span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`transition-transform ${isUsersExpanded ? "rotate-180" : ""}`}
        />
      </button>

      {isUsersExpanded && (
        <div className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1">
          {isLoading && <p className="px-4 py-3 text-sm text-slate-500">Loading users...</p>}
          {isError && (
            <p className="px-4 py-3 text-sm text-red-600">Error: {error.message}</p>
          )}
          {!isLoading && !isError && data?.length === 0 && (
            <p className="px-4 py-3 text-sm text-slate-500">No users found.</p>
          )}
          {!isLoading && !isError && data && data.length > 0 && (
            <nav aria-label="Users" className="space-y-1">
              {data.map((user) => (
                <Link
                  key={user.id}
                  to={`/users/${user.id}`}
                  className="block rounded-xl px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
                >
                  {user.profile.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      )}
    </aside>
  )
}

export default Sidebar