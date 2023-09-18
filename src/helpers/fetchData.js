const token =import.meta.env.VITE_APP_TOKEN



export const fetchData = async (url, method, body = {}) => {

        let options;

    switch (method) {
        case 'POST':
        case 'PUT':
            options = {
                method,
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            };
            break;

        case 'DELETE':
            options = { method };
            break;

        case "GET":
            options = {
                method,
                headers: {
                    Authorization: token
                    
                }
            };
            break;

        default:
            throw new Error("Método no soportado");
    }

    try {
        const response = await fetch(url, options);
       
        if (!response.ok) {
            throw new Error(`ERROR:  ${response.status}`);
        }
    
        const data = await response.json();
          console.log(data)
        return data;

    } catch (error) {

        return { ok: false, msg: `Fetch Error : ${error.message}` };
    }
}
