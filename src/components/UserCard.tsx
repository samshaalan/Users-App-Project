import { Link } from 'react-router'
import type { User } from '../types/types.ts'

//Why is this needed?
interface UserCardProps{
  user: User
}

const UserCard = ({ user }: UserCardProps) => {


  return(
      <Link to={`/users/${user.id}`} className='
      bg-white p-3 rounded-2xl shadow-xl
      flex-1 items-center gap-3
      '>
        <h2>{user.profile.name}</h2>
        <strong>{user.roles[user.roles.length - 1]}</strong>
      </Link>
  )
}

export default UserCard