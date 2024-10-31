import { useState } from "react";
import { projects } from "../../data/projects";
import {Project} from "../../types/Project.tsx";
import {ModalProject} from "./ModalProject.tsx";

export const Projects = () => {
    const [selectedTech, setSelectedTech] = useState<string>("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const technologies = Array.from(
        new Set(projects.flatMap((project) => project.technologies))
    );

    const filteredProjects = projects.filter((project) =>
        selectedTech === "All" ? true : project.technologies.includes(selectedTech)
    );

    const openModal = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <div className="container font-sans text-gray-800">
            <h2 className="text-4xl text-black mb-5 text-center">Проекты</h2>

            <div className="container flex justify-center flex-wrap mb-5 px-4 space-x-4">
                <button
                    onClick={() => setSelectedTech("All")}
                    className={`px-6 py-3 shadow-md transition-transform transform hover:-translate-y-1 m-2 ${
                        selectedTech === "All" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                    } border border-gray-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg`}
                >
                    Все
                </button>
                {technologies.map((tech) => (
                    <button
                        key={tech}
                        onClick={() => setSelectedTech(tech)}
                        className={`px-6 py-3 shadow-md transition-transform transform hover:-translate-y-1 m-2 ${
                            selectedTech === tech ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                        } border border-gray-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg`}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            <ul className="container list-none p-0 max-w-3xl mx-auto">
                {filteredProjects.map((project, index) => (
                    <li
                        key={index}
                        onClick={() => openModal(project)}
                        className="bg-white p-5 mb-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 cursor-pointer"
                    >
                        <h3 className="text-2xl mb-2">{project.title}</h3>
                        <p className="text-lg leading-relaxed mb-2">{project.description}</p>
                        <div className="mb-3 text-gray-600">
                            <span className="text-sm font-semibold">Технологии: {project.technologies.join(", ")}</span>
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
        </div>
    );
};
