import { useState } from "react";
import { NewsContext } from "./news-context";
const listCountry = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']
const listObjectCountryName = ['Emirados Árabes Unidos', 'Argentina', 'Áustria', 'Austrália', 'Bélgica', 'Bulgaria', 'Brasil', 'Canadá', 'Suíça', 'China', 'Colômbia', 'Cuba', 'Chéquia', 'Alemanha', 'Egito', 'França', 'Reino Unido', 'Grécia', 'Hong Kong', 'Hungria', 'Indonésia', 'Irlanda', 'Israel', 'Índia', 'Itália', 'Japão', 'Coreia do Sul', 'Lituânia', 'Letónia', 'Marrocos', 'México', 'Malásia', 'Nigéria', 'Reino dos Países Baixos', 'Noruega', 'Nova Zelândia', 'Filipinas', 'Polónia', 'Portugal', 'Romênia', 'Sérvia', 'Rússia', 'Arábia Saudita', 'Suécia', 'Singapura', 'Eslovénia', 'Eslováquia', 'Tailândia', 'Turquia', 'Taiwan', 'Ucrânia', 'Estados Unidos', 'Venezuela', 'África do Sul']
function NewsProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setRememberme] = useState(true);
  const [coutrys, setCountrys] = useState(listCountry);
  const [coutrysName, setCountrysName] = useState(listObjectCountryName);


  return (
    <NewsContext.Provider value={{ username, password, rememberme, coutrys, coutrysName, setCountrysName, setUsername, setPassword, setRememberme, setCountrys }}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;