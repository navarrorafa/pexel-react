export const Card = ({ foto }) => {
    const { id, photographer, photographer_url, url, alt } = foto;

    return (
        <article className="m-2">
            <div className="card h-100">
                <img src={url} alt={alt} className="card-img-top" style={{ maxHeight: "200px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">Author: {photographer}</h5>
                    <p className="card-text">
                        Perfil del <a href={photographer_url} className="link-primary">Author</a>
                    </p>
                    <p className="text-muted">{id}</p>
                </div>
            </div>
        </article>
    )
}


  
