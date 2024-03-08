import ky from "ky";

const BASE_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = 'gpt-4';
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export interface ChatGptResponse {
    choices: {
        message: {
            content: string;
        }
    }[]
}
const generateChat = async (prompt: string | null): Promise<ChatGptResponse> => {
    const promptToSend = prompt || "";

    return await ky.post(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
        },
        json: {
            model: MODEL,
            messages: [
                {"role": "system", "content": "You are a helpful assistant. You are helping a user with a task. Make sure to answer with the same language and tone as the user."},
                {"role": "user", "content": promptToSend}
            ],
        },
        timeout: 60000000
    }).json();
}


export const chatBotService = {
    generateChat
}