import { useQuery } from "@tanstack/react-query"
import { fetchAllUsers } from "../api/fetchData"
import UserCard from "./UserCard"
import { useState } from "react"

const Roles = () => {

  const [selectedRole, setSelectedRole] = useState("all")

  const {data, isLoading, isError, error } = useQuery({
    queryKey:['users'],
    queryFn: fetchAllUsers, 
    staleTime: 1000 * 60 * 60,
  })
  
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message} </span>
  }
    if (!data) {
    return <span>No users found</span>
  }

  
  const filteredUsers =
    selectedRole === "all"
      ? data
      : data.filter((user) => user.roles.includes(selectedRole))

  return (
  <section className="rounded-[2rem] bg-white p-6 shadow-xl">
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          User roles
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-800">
          Users by role
        </h1>
        <p className="mt-2 text-slate-500">
          {filteredUsers.length} user{filteredUsers.length === 1 ? "" : "s"} found
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="role-filter" className="text-sm font-medium text-slate-700">
          Filter by role
        </label>
        <select
          id="role-filter"
          value={selectedRole}
          onChange={(event) => setSelectedRole(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        >
          <option value="all">All roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="support">Support</option>
        </select>
      </div>
    </div>

    {filteredUsers.length === 0 ? (
      <p className="rounded-xl bg-slate-50 p-8 text-center text-slate-500">
        No users found for this role.
      </p>
    ) : (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    )}
  </section>
)
}

export default Roles