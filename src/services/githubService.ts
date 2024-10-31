import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export interface Repository {
    id: number;
    name: string;
    html_url: string;
}

export interface UserData {
    avatar_url: string;
    login: string;
}

export const getUserData = async (username: string): Promise<UserData> => {
    try {
        const response = await axios.get<UserData>(`${BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении данных пользователя:", error);
        throw new Error("Не удалось загрузить данные пользователя.");
    }
};

export const getUserRepositories = async (username: string): Promise<Repository[]> => {
    try {
        const response = await axios.get<Repository[]>(`${BASE_URL}/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении репозиториев:", error);
        throw new Error("Не удалось загрузить репозитории.");
    }
};
