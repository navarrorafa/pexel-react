import { BuscadorFotos } from "./components/BuscadorFotos";

export default function App() {
  return (
    <div className="d-flex flex-column ">
      <header className='text-center bg-dark text-white py-3'>
        <h1>Prática de Pexel</h1>
      </header>

      <main className="flex-fill px-4">
        <BuscadorFotos/>
      </main>

      <footer className="text-center bg-dark text-white py-3">
        <p>&copy; 2023 Rafael Navarro.</p>
      </footer>
    </div>
  );
}
