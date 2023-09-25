import { useState } from "react";
import { NewsContext } from "./news-context";
const listCountry = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
function NewsProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setRememberme] = useState(true);
  const [countries, setCountries] = useState(listCountry);
  const [countryInput, setCountryInput] = useState('');
  const [countryFiltered, setCountryFiltered] = useState(listCountry);


  return (
    <NewsContext.Provider value={{ username, password, rememberme, countries, countryInput, countryFiltered, setCountryFiltered, setCountryInput, setUsername, setPassword, setRememberme, setCountries }}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;