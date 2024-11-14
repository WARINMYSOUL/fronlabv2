import { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { Project } from "../../types/Project.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { addProject } from "../../store/projectsSlice";
import { useThemeMode } from "flowbite-react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

interface AddModalProjectProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddModalProject: React.FC<AddModalProjectProps> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { computedMode } = useThemeMode();

    const [newProject, setNewProject] = useState<Project>({
        id: uuidv4(),
        title: "",
        description: "",
        technologies: [],
        link: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProject(prevState => ({ ...prevState, [name]: value }));
    };

    const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tech = e.target.value;
        setNewProject(prevState => ({
            ...prevState,
            technologies: tech ? tech.split(",").map(t => t.trim()) : []
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addProject(newProject));
        onClose();
        setNewProject({ id: uuidv4(), title: "", description: "", technologies: [], link: "" });
    };

    const themeClass = computedMode === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800";

    return (
        <Modal show={isOpen} onClose={onClose}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
            >
                <Modal.Header className={themeClass}>Добавить новый проект</Modal.Header>
                <Modal.Body className={themeClass}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">Название проекта</label>
                            <input
                                type="text"
                                name="title"
                                value={newProject.title}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-lg ${themeClass}`}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">Описание</label>
                            <textarea
                                name="description"
                                value={newProject.description}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-lg ${themeClass}`}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">Технологии (через запятую)</label>
                            <input
                                type="text"
                                value={newProject.technologies.join(", ")}
                                onChange={handleTechChange}
                                className={`w-full p-2 border rounded-lg ${themeClass}`}
                                placeholder="React, TypeScript, Redux"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1">Ссылка на проект</label>
                            <input
                                type="text"
                                name="link"
                                value={newProject.link}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-lg ${themeClass}`}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                            Добавить проект
                        </Button>
                    </form>
                </Modal.Body>
            </motion.div>
        </Modal>
    );
};
