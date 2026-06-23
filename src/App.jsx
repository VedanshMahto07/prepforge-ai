import React from 'react'
import Home from './Pages/Home.jsx'
import Setup from './Pages/Setup.jsx'
import Interview from './Pages/Interview.jsx'
import Result from './Pages/Result.jsx'
import {Routes, Route} from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/setup' element={< Setup/>} />
        <Route path='/interview' element={< Interview/>} />
        <Route path='/result' element={< Result/>} />
      </Routes>
    </div>
  )
}

export default App
