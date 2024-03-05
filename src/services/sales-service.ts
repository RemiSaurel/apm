import ky from "ky";

const BASE_URL = 'http://puce.geap.iut-tlse3.fr/MIAGE_CLIENT/';
const getAll = async () =>{
    return await ky.get(BASE_URL).json();
}

const getCoeff = async (trim: number) => {
    return await ky.get(`${BASE_URL}?trim=${trim}`).json();
}

const getUnits = async (coef: number, cost: number) => {
    const res = await ky.post(BASE_URL, {
        mode: 'no-cors',
        json: {
            coeffSaisonnier: coef,
            coutPublicite: cost
        }
    }).json();

    console.log(res);

    return res;
}

export const salesService = {
    getAll,
    getCoeff,
    getUnits
}