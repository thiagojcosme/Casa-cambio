const token = import.meta.env.VITE_API_KEY;

const API_URL = `https://v6.exchangerate-api.com/v6/${token}/latest`
export function getImporteData(moeda){
    return fetch(`${API_URL}/${moeda}`)
    .then(response => response.json())
    .then(data => Object.entries(data).map((name, value) => name, value));
    //     response.json().then((data) => {
    //         return data; 
            
    //     })
    //     console.log(data);
    // })
};

// getImporteData('USD');