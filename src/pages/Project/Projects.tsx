import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { fetchAndAddGitHubProjects } from "../../services/githubService";
import { Project } from "../../types/Project";
import { ModalProject } from "./ModalProject";
import { AddModalProject } from "./AddModalProject";
import { removeProject } from "../../store/projectsSlice";
import { FaTrash } from "react-icons/fa";

export const Projects = () => {
    const dispatch = useDispatch<AppDispatch>();
    const projects = useSelector((state: RootState) => state.projects.items);
    const [selectedTech, setSelectedTech] = useState<string>("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

    useEffect(() => {
        dispatch((dispatch, getState) => fetchAndAddGitHubProjects("WARINMYSOUL", dispatch, getState));
    }, [dispatch]);

    const technologies = Array.from(new Set(projects.flatMap((project) => project.technologies || [])));
    const filteredProjects = projects.filter(project =>
        selectedTech === "All" ? true : project.technologies?.includes(selectedTech)
    );

    const openModal = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    const handleDeleteProject = (id: number) => {
        dispatch(removeProject(id));
    };

    return (
        <div className="container mx-auto font-sans text-gray-800">
            <h2 className="text-4xl text-black mb-5 text-center">Проекты</h2>
            {projects.length > 0 && (
                <div className="container flex justify-center flex-wrap mb-5 px-4 space-x-4">
                    <button
                        onClick={() => setSelectedTech("All")}
                        className={`px-6 py-3 shadow-md transition-transform transform hover:-translate-y-1 m-2 ${
                            selectedTech === "All" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                        } border border-gray-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg`}
                    >
                        Все
                    </button>
                    {technologies.map((tech, index) => (
                        <button
                            key={tech || index}
                            onClick={() => setSelectedTech(tech)}
                            className={`px-6 py-3 shadow-md transition-transform transform hover:-translate-y-1 m-2 ${
                                selectedTech === tech ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                            } border border-gray-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
            )}

            <ul className="container list-none p-0 max-w-3xl mx-auto">
                {filteredProjects.map((project, index) => (
                    <li
                        key={index}
                        className="relative bg-white p-5 mb-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl mb-2" onClick={() => openModal(project)}>
                                {project.title}
                            </h3>
                            <FaTrash
                                onClick={() => handleDeleteProject(project.id)}
                                className="text-red-500 cursor-pointer hover:text-red-700"
                                title="Удалить проект"
                            />
                        </div>
                        <p className="text-lg leading-relaxed mb-2">{project.description}</p>
                        <div className="mb-3 text-gray-600">
                            <span className="text-sm font-semibold">
                                Технологии: {Array.isArray(project.technologies) ? project.technologies.join(", ") : "Нет данных"}
                            </span>
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 font-bold hover:underline"
                        >
                            Посмотреть проект
                        </a>
                    </li>
                ))}
            </ul>

            <ModalProject project={selectedProject} onClose={closeModal} />

            <div className="flex justify-center mt-10 mb-10">
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:-translate-y-1"
                >
                    Добавить проект
                </button>
            </div>

            <AddModalProject isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
        </div>
    );
};
