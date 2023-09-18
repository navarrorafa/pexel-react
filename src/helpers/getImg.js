import { fetchData } from "./fetchData";


const urlBase = import.meta.env.VITE_APP_URL_BASE

export const getImg = async (categoria , page = 1) => {
    const url = `${urlBase}${categoria}per_page=5&page=${page}`;
    console.log(url)
    const { photos } = await fetchData(url, 'GET');
     
    const fotos = photos.map((foto) => ({
        id: foto.id,
        photographer: foto.photographer,
        photographer_url: foto.photographer_url,
        url: foto.src.medium,
        alt: foto.alt
    }));

    return { fotos };
}
