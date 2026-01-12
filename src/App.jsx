// import { useState } from 'react'
import '././assets/css/App.css'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import Layout from './layout/layout.jsx'
import Home from './pages/home.jsx'
function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          
          
          
          </Route>
        </Routes>
      
      </BrowserRouter>      

    </section>
  )
}

export default App
