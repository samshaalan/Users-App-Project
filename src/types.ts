export type User = {
  id: number
  profile: {
    name: string
    email: string
    address: {
      street: string
      zipCode: string
      city: string
    }
  }
  roles: string[]
  settings: {
    theme: string
    notifications: {
      email: boolean
      push: boolean
    }
  }
  username: string
}