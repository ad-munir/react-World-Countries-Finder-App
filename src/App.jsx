
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import CountryInfo from './components/CountryInfo';
import { UserContext } from './Contexts/UserContext';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search" element={<SearchBar/>} />
        <Route path="/country/:country" element={<CountryInfo/>} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>

  )
}

export default App
