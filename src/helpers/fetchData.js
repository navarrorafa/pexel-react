export const fetchData = async (categoria) => {
    const api = `https://api.pexels.com/v1/search?query=${categoria}`;
    const token = "QOqsi5EgeebCWBirHaswGRZXrLjG4CvKrDvH9JeFnFwzkL7dCPLB3oXD";

    const response = await fetch(api, {
        method: "get",
        headers: {
            Authorization: token
        }
    });

    if (!response.ok) {
        throw new Error("Error al obtener datos");
    }

    const data = await response.json();
    return data;
}
