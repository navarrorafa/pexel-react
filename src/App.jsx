import React from 'react'
import { BuscadorFotos } from './components/BuscadorFotos'


export default function App() {
  return (
       
<div className="d-flex flex-column min-vh-100 " >
  <header className='text-center bg-dark text-white py-3'>
   <h1>Practica de pexel</h1>
  </header>

  <main className="flex-fill">
   <BuscadorFotos/>
  </main>

  <footer className="text-center bg-dark text-white py-3">
    <p>&copy; 2023 Rafael Navarro.</p>
  </footer>
</div>

  )
}
