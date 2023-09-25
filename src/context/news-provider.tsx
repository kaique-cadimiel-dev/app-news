import { useState } from "react";
import { NewsContext } from "./news-context";
const listCountry = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
const listTopcs = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
function NewsProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setRememberme] = useState(true);
  const [countries, setCountries] = useState(listCountry);
  const [countryInput, setCountryInput] = useState('');
  const [topcsInput, setTopcsInput] = useState('');
  const [countryFiltered, setCountryFiltered] = useState(listCountry);
  const [topics, setTopics] = useState(listTopcs);
  const [topicsFiltered, setTopicsFiltered] = useState(listTopcs);


  return (
    <NewsContext.Provider value={{
      username,
      password,
      rememberme,
      countries,
      countryInput,
      countryFiltered,
      topics,
      topicsFiltered,
      topcsInput,
      setTopcsInput,
      setCountryFiltered,
      setCountryInput,
      setUsername,
      setPassword,
      setRememberme,
      setCountries,
      setTopics,
      setTopicsFiltered
    }}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;