import { createContext } from 'react'
type NewsContextType = {
    username: string,
    password: string,
    rememberme: boolean,
    countries: string[],
    countryInput: string,
    countryFiltered: string[],
    topics: string[],
    topicsFiltered: string[],
    topcsInput: string,
    fullName: string,
    email: string,
    phone: string,
    image: string,
    setImage: React.Dispatch<React.SetStateAction<string>>,
    setFullName: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPhone: React.Dispatch<React.SetStateAction<string>>,
    setTopcsInput: React.Dispatch<React.SetStateAction<string>>,
    setTopics: React.Dispatch<React.SetStateAction<string[]>>,
    setTopicsFiltered: React.Dispatch<React.SetStateAction<string[]>>,
    setRememberme: React.Dispatch<React.SetStateAction<boolean>>,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setCountries: React.Dispatch<React.SetStateAction<string[]>>,
    setCountryInput: React.Dispatch<React.SetStateAction<string>>,
    setCountryFiltered: React.Dispatch<React.SetStateAction<string[]>>
}
export const NewsContext = createContext({} as NewsContextType)
