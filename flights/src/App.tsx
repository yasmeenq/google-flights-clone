import './App.css'
import { Header } from './Components/Header/Header';
import { SearchPage } from './Components/SearchPage/SearchPage';


export default function App() {

  return (
    <div className="App">
        <Header />
        <SearchPage />
    </div>
  );
}