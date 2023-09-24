import { useState } from "react";
import { NewsContext } from "./news-context";
function NewsProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setRememberme] = useState(false);
  return (
    <NewsContext.Provider value={{ username, password, rememberme, setUsername, setPassword, setRememberme }}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;