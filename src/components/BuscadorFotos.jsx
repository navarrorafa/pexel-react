import React, { useState } from 'react';

import { GridGallery } from './GridGallery';
import { Formulario } from './Formulario';

export const BuscadorFotos = () => {
  const [arrayCat, setArrayCat] = useState([]);

  const addCategoria = (categoria) => {
    if (categoria && !arrayCat.includes(categoria)) {
      setArrayCat((prevCats) => [categoria, ...prevCats]);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Buscador de Fotos - Galería</h1>
      <Formulario addCategoria={addCategoria} />
      {arrayCat.map((categoria) => (
        <GridGallery key={categoria} categoria={categoria} />
      ))}
    </div>
  );
};
