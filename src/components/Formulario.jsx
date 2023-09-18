import React from 'react';
import { useFormulario } from '../hooks/useFormulario';


export const Formulario = ({ addCategoria }) => {
  const initialState = { categoria: '' };


  const [values, handleChange, handleSubmit, reset] = useFormulario(initialState, addCategoria);

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center mt-3">
      <input
        type="text"
        name="categoria"
        className="form-control me-2"
        placeholder="Añadir categoría"
        value={values.categoria}
        onChange={handleChange}
      />
      <input type="submit" value="Añadir" className="btn btn-dark m-2" />
    </form>
  );
}
