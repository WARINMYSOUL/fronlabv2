import axios from 'axios';
import { AppDispatch, RootState } from "../store";
import { setProjects } from "../store/projectsSlice";
import { Project } from "../types/Project";

export interface Repository {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    languages: string[];
}

export const fetchAndAddGitHubProjects = async (
    username: string,
    dispatch: AppDispatch,
    getState: () => RootState
) => {
    try {
        console.log("Начало загрузки репозиториев...");
        const repos = await getUserRepositories(username);

        const existingProjectIds = new Set(getState().projects.items.map((project) => project.id));
        const uniqueProjects = await Promise.all(
            repos.map(async (repo) => {
                const languages = await getRepositoryLanguages(username, repo.name);
                return mapRepositoryToProject({ ...repo, languages });
            })
        ).then(projects => projects.filter((project) => !existingProjectIds.has(project.id)));

        dispatch(setProjects([...getState().projects.items, ...uniqueProjects]));
    } catch (error) {
        console.error("Ошибка при добавлении проектов из GitHub:", error);
    }
};

export const mapRepositoryToProject = (repo: Repository): Project => ({
    id: repo.id,
    title: repo.name,
    description: repo.description || 'Описание отсутствует',
    technologies: repo.languages || [], // Если пусто, добавляется пустой массив
    link: repo.html_url,
});


const token = import.meta.env.VITE_GITHUB_TOKEN;

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const getUserRepositories = async (username: string): Promise<Repository[]> => {
    try {
        const response = await axiosInstance.get<Repository[]>(`/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении репозиториев:", error);
        throw new Error("Не удалось загрузить репозитории.");
    }
};

export const getRepositoryLanguages = async (username: string, repoName: string): Promise<string[]> => {
    try {
        const response = await axiosInstance.get<Record<string, number>>(`/repos/${username}/${repoName}/languages`);
        console.log(`Языки для репозитория ${repoName}:`, Object.keys(response.data)); // Логирование языков
        return Object.keys(response.data);
    } catch (error) {
        console.error(`Ошибка при получении языков для репозитория ${repoName}:`, error);
        return [];
    }
};
