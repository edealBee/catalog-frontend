import React from 'react';
import { tempus } from 'tempusjs';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import Login from './Components/Login/Login.jsx';
import './App.css';

export const searchContext = React.createContext('');

function App() {

  const [searchValue, setSearchValue] = React.useState('');

  return (
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="App">
          <div className="AppHeader">
            <Header />
          </div>
          <div className="AppContent">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </searchContext.Provider>
  );
}

export default App;
