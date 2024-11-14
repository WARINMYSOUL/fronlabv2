import {useCallback, useEffect, useMemo, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { fetchAndAddGitHubProjects } from "../../services/githubService";
import { Project } from "../../types/Project";
import { ModalProject } from "./ModalProject";
import { AddModalProject } from "./AddModalProject";
import { removeProject } from "../../store/projectsSlice";
import { FaTrash } from "react-icons/fa";
import { Button, Spinner, Pagination } from "flowbite-react";

const ITEMS_PER_PAGE = 5;

export const Projects = () => {
    const dispatch = useDispatch<AppDispatch>();
    const projects = useSelector((state: RootState) => state.projects.items);
    const [selectedTech, setSelectedTech] = useState<string[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const loadProjects = useCallback(async () => {
        setLoading(true);
        await dispatch((dispatch, getState) => fetchAndAddGitHubProjects("WARINMYSOUL", dispatch, getState));
        setLoading(false);
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            await loadProjects();
        };
        fetchData().catch((error) => {
            console.error("Ошибка при загрузке проектов:", error);
        });
    }, [loadProjects]);


    const technologies = useMemo(() => {
        return Array.from(new Set(projects.flatMap((project) => project.technologies || [])));
    }, [projects]);

    const toggleTech = useCallback((tech: string) => {
        setSelectedTech((prevSelectedTech) =>
            prevSelectedTech.includes(tech)
                ? prevSelectedTech.filter((t) => t !== tech)
                : [...prevSelectedTech, tech]
        );
    }, []);

    const filteredProjects = useMemo(() => {
        return projects.filter(project =>
            selectedTech.length === 0 || project.technologies?.some(tech => selectedTech.includes(tech))
        );
    }, [projects, selectedTech]);

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const currentProjects = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredProjects, currentPage]);

    const openModal = useCallback((project: Project) => setSelectedProject(project), []);
    const closeModal = () => setSelectedProject(null);

    const handleDeleteProject = useCallback((id: string) => {
        dispatch(removeProject(id));
    }, [dispatch]);

    const onPageChange = useCallback((page: number) => setCurrentPage(page), []);

    return (
        <div className="content-center mx-auto px-6 font-sans text-gray-800 dark:text-gray-100 dark:bg-gray-900">
            <h2 className="text-4xl text-black dark:text-gray-200 mb-5 mt-5 text-center">Проекты</h2>
            <div className="content-center flex justify-center mb-5 space-x-2">
                <Button
                    onClick={loadProjects}
                    className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-1 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 transition-transform transform hover:-translate-y-1 text-sm"
                >
                    {loading ? (
                        <>
                            <Spinner size="sm" aria-label="Загрузка проектов..." />
                            <span className="pl-2">Загрузка...</span>
                        </>
                    ) : (
                        "Обновить"
                    )}
                </Button>
                <Button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-green-500 dark:bg-green-700 text-white px-4 py-1 rounded-lg shadow-md hover:bg-green-600 dark:hover:bg-green-800 transition-transform transform hover:-translate-y-1 text-sm"
                >
                    Добавить
                </Button>
            </div>

            {projects.length > 0 && (
                <div className="content-center flex justify-center flex-wrap mb-5 px-4 space-x-2">
                    <button
                        onClick={() => setSelectedTech([])} // сбросить фильтр
                        className={`px-4 py-2 shadow-md transition-transform transform hover:-translate-y-1 m-2 text-sm ${
                            selectedTech.length === 0 ? "bg-blue-500 dark:bg-blue-700 text-white" : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100"
                        } border border-gray-300 dark:border-gray-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg`}
                    >
                        Все
                    </button>
                    {technologies.map((tech, index) => (
                        <button
                            key={tech || index}
                            onClick={() => toggleTech(tech)}
                            className={`px-4 py-2 shadow-md transition-transform transform hover:-translate-y-1 m-2 text-sm ${
                                selectedTech.includes(tech) ? "bg-blue-500 dark:bg-blue-700 text-white" : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100"
                            } border border-gray-300 dark:border-gray-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
            )}

            <ul className="content-center list-none p-0 max-w-3xl mx-auto">
                {currentProjects.map((project) => (
                    <li
                        key={project.id}
                        onClick={() => openModal(project)}
                        className="relative bg-white dark:bg-gray-800 p-5 mb-4 rounded-lg shadow-md transition-all transform hover:scale-105 cursor-pointer"
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl mb-2 text-blue-800 dark:text-blue-400">{project.title}</h3>
                            <FaTrash
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteProject(project.id); // Убедитесь, что функция handleDeleteProject принимает строку
                                }}
                                className="text-red-500 dark:text-red-400 cursor-pointer hover:text-red-700 dark:hover:text-red-600"
                                title="Удалить проект"
                            />
                        </div>
                        <p className="text-lg leading-relaxed mb-2">{project.description}</p>
                        <div className="mb-3 text-gray-600 dark:text-gray-300">
            <span className="text-sm font-semibold">
                Технологии: {Array.isArray(project.technologies) ? project.technologies.join(", ") : "Нет данных"}
            </span>
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-blue-400 dark:text-blue-300 font-bold hover:underline"
                        >
                            Посмотреть проект
                        </a>
                    </li>
                ))}

            </ul>

            <div className="flex justify-center mt-6 mb-10">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
            </div>

            <ModalProject project={selectedProject} onClose={closeModal} />
            <AddModalProject isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
        </div>
    );
};
