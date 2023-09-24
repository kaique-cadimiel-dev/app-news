import { createContext } from 'react'
type NewsContextType = {
    username: string,
    password: string,
    rememberme: boolean,
    coutrys: string[],
    coutrysName: string[],
    setRememberme: React.Dispatch<React.SetStateAction<boolean>>,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setCountrys: React.Dispatch<React.SetStateAction<string[]>>
    setCountrysName: React.Dispatch<React.SetStateAction<string[]>>
}
export const NewsContext = createContext({} as NewsContextType)
