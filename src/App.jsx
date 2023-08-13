
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CountryInfo from './components/CountryInfo';
import { CountryContext } from './Contexts/contexts';
import { useState } from 'react';
function App() {

  
  
  const [ country, setCountry ] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
}

  return (

    <CountryContext.Provider value={{ country, setCountry, darkMode, toggleDarkMode}}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/country" element={<CountryInfo />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </CountryContext.Provider>
    

  )
}

export default App
