import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import NewsProvider from './context/news-provider.tsx';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <NewsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </NewsProvider>
)
