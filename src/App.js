import React from 'react'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { GoodAt } from './components/GoodAt'
import { Contact } from './components/Contact'

import { History } from './components/History'
import './App.css';


function App() {
  return (
    <>
     <Nav />
     <Home />
     <GoodAt />
     <History />
     <Contact />
     <hr />
    </>
  );
}

export default App;
