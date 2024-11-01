import { Modal, Button } from "flowbite-react";
import { Project } from "../../types/Project.ts";
import { useThemeMode } from "flowbite-react";

interface ModalProjectProps {
    project: Project | null;
    onClose: () => void;
}

export const ModalProject: React.FC<ModalProjectProps> = ({ project, onClose }) => {
    const { computedMode } = useThemeMode();

    if (!project) return null;

    const themeClass = computedMode === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800";

    return (
        <Modal show={Boolean(project)} onClose={onClose} className="!overflow-y-auto" dismissible>
            <Modal.Header className={themeClass}>{project.title}</Modal.Header>
            <Modal.Body className={themeClass}>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed">
                        {project.description}
                    </p>
                    <div className="text-sm">
                        <span className="font-semibold">Технологии: </span>
                        {project.technologies.join(", ")}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className={themeClass}>
                <Button onClick={onClose}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};
