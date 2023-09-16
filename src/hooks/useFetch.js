import { useState, useEffect } from 'react';
import { getImg } from '../helpers/getImg';

export const useFetch = (categoria) => {
  const [state, setState] = useState({
    data: null,
    loading: false, 
    error: null
  });

  useEffect(() => {
    const fetchImages = async () => {  
      if (categoria) {
        setState(prevState => ({ ...prevState, loading: true }));
       
        try {
          const data = await getImg(categoria); 
      
        
          if(data && data.fotos) {
            setState({
              data: data.fotos,
              loading: false,
              error: null
            });
          } else {
            throw new Error('No se encontraron fotos');
          }

        } catch (error) {
          setState({
            data: null,
            loading: false,
            error: error.message
          });
        }
      }
    };

    fetchImages(); 
  }, [categoria]);

  return state;
};
