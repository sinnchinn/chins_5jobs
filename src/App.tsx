import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PubmarkComponent from './components/pages/PubmarkComponent';
import PlayMediaComponent from './components/pages/PlayMediaComponent';
import NotionComponent from './components/pages/NotionComponent';
import DiscordComponent from './components/pages/DiscordComponent';
import UstwoComponent from './components/pages/UstwoComponent'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <div className='content'>
        
        <Routes>
          <Route path='/' element={<PubmarkComponent />} />
          <Route path='/playmedia' element={<PlayMediaComponent />} />
          <Route path='/notion' element={<NotionComponent />} />
          <Route path='/ustwo' element={<UstwoComponent />} />
          <Route path='/discord' element={<DiscordComponent />} />
        </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
