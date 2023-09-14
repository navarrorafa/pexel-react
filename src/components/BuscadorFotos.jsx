import React, { useState } from 'react';
import { Formulario } from './Formulario';
import { GridGallery } from './GridGallery';
import {fetchData} from '../helpers/fetchData'
import { useFetch } from '../hooks/useFetch';







export const BuscadorFotos = () => {
  const [arrayCat, setArrayCat] = useState([]);

  const [images, setImages] = useState([]);
  
 
  const addCategoria = async (categoria) => {
    if (categoria && !arrayCat.includes(categoria)) {
      setArrayCat(prevCats => [...prevCats, categoria]);
    }

    try {
        const data = await useFetch(categoria)
        
        setImages(data.photos)
       console.log(data.photos)

    } catch (error) {
      console.log("error al obtener fetch" , error)
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
