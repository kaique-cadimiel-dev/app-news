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
