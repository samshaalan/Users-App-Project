
import { useQuery } from "@tanstack/react-query";
import UserCard from "./UserCard";
import { fetchAllUsers } from "../api/fetchData"
import { Link } from "react-router";


const UsersList = () => {

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
    return <span>Inga användare hittades</span>
  }


  return (
    
    <div className="grid grid-cols-4 gap-4 w-full">
      {data.map((user) => (
        <UserCard key={user.id} user={user} ></UserCard>
      ))}
    </div>
    
  );
};

export default UsersList;


