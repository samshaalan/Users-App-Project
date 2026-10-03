import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router"
import { fetchAllUsers } from "./api/fetchData"


const UserDetail = () => {
  const { userId } = useParams();

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
  const user = data.find((u) => u.id === Number(userId));

  
  return(
    <h2>
      Användarnamn: {user.username} 
      <br />
      {user.profile.name}
       <br />
      {user.profile.email}
       <br />
      {user.profile.address.street}
       <br />
      {user.profile.address.zipCode}
       <br />
      {user.profile.address.city}
       <br />
      {user.roles}
       <br />
      {user.settings.theme}
       <br />
      {user.settings.notifications.email ? "Ja" : "Nej"}
       <br />
      {user.settings.notifications.push ? "Ja" : "Nej"}
    </h2>
  )
}

export default UserDetail