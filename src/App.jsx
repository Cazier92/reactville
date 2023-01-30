import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './styles/App.css'
import Nav from './Components/Nav/Nav'
import { useState } from 'react'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import SuperMarket from './Components/SuperMarket/SuperMarket'

const App = () => {
  const [daytime, setDaytime] = useState(true)
  const [cash, setCash] = useState(100)
  const handleExchange = (amt) => {
    setCash()
  }
  return (
    <>
    <Nav setDaytime={setDaytime} cash={cash}/>
    <main>
      <Routes>
        <Route path='/' element={<Landing daytime={daytime}/>}/>
        <Route path='/burgers' element={<BurgerShop />}/>
        <Route path='/market' element={<SuperMarket />} setCash={setCash}/>
      </Routes>
    </main>
    </>
  )
}

export default App