import ky from "ky";
import {GPTModel} from "../models/chat-models.ts";

const BASE_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export interface ChatGptResponse {
    choices: {
        message: {
            content: string;
        }
    }[]
}
const generateChat = async (prompt: string | null, model: GPTModel): Promise<ChatGptResponse> => {
    const promptToSend = prompt || "";

    return await ky.post(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
        },
        json: {
            model: model,
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