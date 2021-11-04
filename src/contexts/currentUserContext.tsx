import { createContext, useState } from 'react'

export const CurrentUserContext = createContext({})

export interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export interface CurrentUser {
  id: number
  name: string
}

const CurrentUserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>({
    id: 1,
    name: 'Antonio'
  })

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserProvider
