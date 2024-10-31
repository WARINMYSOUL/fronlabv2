import React, { useEffect, useState } from 'react';
import { getUserData, getUserRepositories, Repository, UserData } from '../services/githubService';

export const GitHubProjects: React.FC = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [error, setError] = useState<string | null>(null);

    const username = 'WARINMYSOUL';

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserData(username);
                setUserData(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Неизвестная ошибка.");
                }
            }
        };

        fetchUserData();
    }, [username]);

    // Получение репозиториев
    const fetchRepositories = async () => {
        try {
            const repos = await getUserRepositories(username);
            setRepositories(repos);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Неизвестная ошибка.");
            }
        }
    };

    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <div className="flex flex-col items-center space-y-4 mt-10">
            {userData ? (
                <div className="w-72 p-4 rounded-lg shadow-lg bg-white">
                    <img
                        src={userData.avatar_url}
                        alt={`${userData.login} avatar`}
                        className="rounded-full w-24 h-24 mx-auto mb-4"
                    />
                    <h2 className="text-center text-xl font-semibold">{userData.login}</h2>
                    <button
                        onClick={fetchRepositories}
                        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Показать репозитории
                    </button>
                </div>
            ) : (
                <p className="text-center">Загрузка...</p>
            )}

            {repositories.length > 0 && (
                <div className="w-72">
                    <h3 className="text-lg font-medium text-center mb-2">Репозитории</h3>
                    <ul className="space-y-2">
                        {repositories.map((repo) => (
                            <li key={repo.id} className="text-center">
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {repo.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
