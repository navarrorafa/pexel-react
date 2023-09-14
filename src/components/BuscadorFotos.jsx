import React, { useState } from 'react';
import { Formulario } from './Formulario';
import { GridGallery } from './GridGallery';

export const BuscadorFotos = () => {
  const [arrayCat, setArrayCat] = useState([]);
  
 
  const addCategoria = (categoria) => {
    if (categoria && !arrayCat.includes(categoria)) {
      setArrayCat(prevCats => [...prevCats, categoria]);
    }
  };

  return (
    <>
      <h1>Buscador de Fotos - Galería</h1>
      <Formulario addCategoria={addCategoria} />
      {arrayCat.map((categoria) => (
        <React.Fragment key={categoria}>
          <GridGallery categoria={categoria} />
        </React.Fragment>
      ))}
    </>
  );
};
