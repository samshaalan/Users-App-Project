







const fetchUserById = async (userId) =>  {
  const response = await fetch(`https://api-userapi.onrender.com/api/users/getUsers/${userId}`, {
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

const fetchAllUsers = async () => {
      const response = await fetch('https://api-userapi.onrender.com/api/users/getUsers/', {
        headers: {
          'x-api-key': 'elev-hemlighet-2026'
        }
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    }
    

export { fetchUserById, fetchAllUsers }

