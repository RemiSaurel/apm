import ky from "ky";

const BASE_URL = 'https://api.openai.com/v1/images/generations';
const MODEL = 'dall-e-3';
const N = 1;
const SIZE = '1024x1024';
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const generateImage = async (prompt: string) =>{
    return await ky.post(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
        },
        json: {
            model: MODEL,
            n: N,
            prompt: prompt,
            size: SIZE
        },
        timeout: 60000000
    }).json();
}

export const genImagesService = {
    generateImage
}