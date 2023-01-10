import {useState,createContext, Children, useContext} from 'react'

const AuthContext = createContext(null)

export const AuthProvider = () => {
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)

    const login = (email,password) => {
        setEmail(email)
        setPassword(password)
    }

    const logout = () => {
        setEmail(null)
        setPassword(null)
    }

    return (<AuthContext.Provider value={{email, password, login, logout}}>
             {Children}
            </AuthContext.Provider>
    )
    
}

export const useAuth = () => {
    return useContext(AuthContext)
}