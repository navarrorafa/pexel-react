import { useFetch } from "../hooks/useFetch";
import { usePagination } from "../hooks/usePagination";
import { Card } from "./Card";

export const GridGallery = ({ categoria }) => {
  const [page,nextPage,prevPage] = usePagination();
  const { data: fotos, loading, error } = useFetch(categoria, page);

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

      
      <div className="d-flex justify-content-center mt-4">
    <button onClick={prevPage} disabled={page <= 1} className="btn btn-dark m-2">
      Anterior
    </button>
    <p className="btn btn-dark m-2">{page}</p>
    <button onClick={nextPage} className="btn btn-dark m-2" >
      Próximo
    </button>
  </div>
    </section>
  );
};
