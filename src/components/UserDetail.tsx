import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router"
import { fetchAllUsers } from "../api/fetchData"



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
  const user = data?.find((u) => u.id === Number(userId));

  if (!user) {
    return <span>Användaren hittades inte</span>
  }
  
  return(
    <div className="flex ">
      <div className="flex gap-2">
        Användarnamn:  
        {user.username} 
      </div>
      <section className="flex">
        Profile: 
        <br />
        Name: {user.profile.name}
        <br />
        Email: {user.profile.email}
        <section>
          {user.profile.address.street}
          <br />
          {user.profile.address.zipCode}
          <br />
          {user.profile.address.city}
          <br />
        </section>
      </section>

      <section>
        {user.roles}
        <br />
      </section>

      <section>
        {user.settings.theme}
        <section>
          {user.settings.notifications.email ? "Ja" : "Nej"}
          <br />
          {user.settings.notifications.push ? "Ja" : "Nej"}
        </section>
      </section>
      <section>

      </section>

      
       <br />
     
    </div>
  )
}

export default UserDetail