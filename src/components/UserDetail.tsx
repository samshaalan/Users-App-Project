import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router"
import { fetchAllUsers } from "../api/fetchData"



const UserDetail = () => {
  const { userId } = useParams();
  const navigate = useNavigate()

  const {data, isLoading, isError, error } = useQuery({
    queryKey:['users', userId],
    queryFn: fetchAllUsers,
    staleTime: 1000 * 60 * 60
  })
  
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message} </span>
  }

  // 1. Sök ut rätt användare ur arrayen baserat på ID[cite: 2]
  const user = data?.find((u) => u.id === Number(userId));

  if (!user) {
    return <span>Användaren hittades inte</span>
  }
  
  return(
    <div className="h-full w-full bg-slate-900 p-6 text-left text-slate-100">

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-6 rounded bg-slate-700 px-4 py-2 text-white hover:bg-slate-600"
      >
        Tillbaka
      </button>
      
      <h1 className="text-2xl font-bold">{user.profile.name}</h1>
      <p className="text-slate-400">
        {user.username} · {user.roles.join(", ")}
      </p>
 
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-slate-700 bg-slate-800 p-5">
          <h2 className="mb-3 font-semibold">Profil</h2>
          <p className="flex justify-between gap-4">
            <span className="text-slate-400">Namn</span>
            <span className="font-medium">{user.profile.name}</span>
          </p>
          <p className="mt-2 flex justify-between gap-4">
            <span className="whitespace-nowrap text-slate-400">E-post</span>
            <span className="break-words font-medium">{user.profile.email}</span>
          </p>
        </section>
 
        <section className="rounded-xl border border-slate-700 bg-slate-800 p-5">
          <h2 className="mb-3 font-semibold">Adress</h2>
          <p className="flex justify-between gap-4">
            <span className="text-slate-400">Gata</span>
            <span className="font-medium">{user.profile.address.street}</span>
          </p>
          <p className="mt-2 flex justify-between gap-4">
            <span className="text-slate-400">Postnummer</span>
            <span className="font-medium">{user.profile.address.zipCode}</span>
          </p>
          <p className="mt-2 flex justify-between gap-4">
            <span className="text-slate-400">Stad</span>
            <span className="font-medium">{user.profile.address.city}</span>
          </p>
        </section>
 
        <section className="rounded-xl border border-slate-700 bg-slate-800 p-5">
          <h2 className="mb-3 font-semibold">Inställningar</h2>
          <p className="flex justify-between gap-4">
            <span className="text-slate-400">Tema</span>
            <span className="font-medium">{user.settings.theme}</span>
          </p>
          <p className="mt-2 flex justify-between gap-4">
            <span className="text-slate-400">E-postnotiser</span>
            <span className="font-medium">
              {user.settings.notifications.email ? "Ja" : "Nej"}
            </span>
          </p>
          <p className="mt-2 flex justify-between gap-4">
            <span className="text-slate-400">Pushnotiser</span>
            <span className="font-medium">
              {user.settings.notifications.push ? "Ja" : "Nej"}
            </span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default UserDetail