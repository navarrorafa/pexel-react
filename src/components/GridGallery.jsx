import React from 'react';
import { Card } from './Card';
import { useFetch } from '../hooks/useFetch';

export const GridGallery = ({ categoria }) => {
  const { data: fotos, loading, error } = useFetch(categoria);

  return (
    <section className='container mt-4'>

      <h2 className='text-dark mb-3 '>{categoria}</h2>
      {loading && <p className='alert alert-info'>Cargando...</p>}
      {error && <p className='alert alert-danger'>Error: {error}</p>}

      <div className="row">
        {!loading && !error && fotos && fotos.map((foto) => (
          <div className='col-md-4 mb-3' key={foto.id}>
            <Card foto={foto} />
          </div>
        ))}
      </div>
    </section>
  );
};
