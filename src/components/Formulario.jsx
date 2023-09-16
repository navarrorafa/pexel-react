import React from 'react';
import { useFormulario } from '../hooks/useFormulario';


export const Formulario = ({ addCategoria }) => {
  const initialState = { categoria: '' };


  const [values, handleChange, handleSubmit, reset] = useFormulario(initialState, addCategoria);

  return (
    <nav className='className="vh-100 d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="categoria"
          id="categoria"
          placeholder="Añadir categoría"
          value={values.categoria}
          onChange={handleChange}
        />
        <input type="submit" value="Añadir" />
      </form>
    </nav>
  );
}
