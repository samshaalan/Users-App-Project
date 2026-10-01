import { useQuery } from "@tanstack/react-query"

function App() {

  const {data, isLoading, isError, error } = useQuery({
    queryKey:['users'],
    queryFn: async () => {
      const response = await fetch('https://api-userapi.onrender.com/api/users/getUsers', {
        method: 'GET',
        headers: {
          'x-api-key': 'elev-hemlighet-2026'
        }
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    }
  })
  
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message} </span>
  }

  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.profile.name} - <strong>{user.roles}</strong>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
