export const Card = ({ foto }) => {
    const { id, photographer, photographer_url, url, alt } = foto;

    return (
        <article>
            <div className="card h-100">
                <img src={url} alt={alt} className="card-img-top img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">Author: {photographer}</h5>
                    <p className="card-text">Perfil del <a href={photographer_url}>Author</a></p>
                    <p>{id}</p>
                </div>
            </div>
        </article>
    )
}


  
