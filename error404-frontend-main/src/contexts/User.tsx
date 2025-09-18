'use client'
import { createContext, ReactNode, useState } from "react"

type User = {
    user: object,
    setUser: (user: object) => void,
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const UserContext = createContext<User>({})

export const UserProvider = ({children}: {children: ReactNode}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState({})
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>    
    )
}

export default UserContext