import type { User } from './types.ts'

interface UserCardProps{
  user: User
}

const UserCard = ({ user }: UserCardProps) => {


  return(
    <div>
      <h2>{user.profile.name}</h2>
      <strong>{user.roles[user.roles.length - 1]}</strong>
    </div>
  )
}

export default UserCard