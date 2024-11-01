import { Modal, Button } from "flowbite-react";
import { Project } from "../../types/Project.ts";

interface ModalProjectProps {
    project: Project | null;
    onClose: () => void;
}

export const ModalProject: React.FC<ModalProjectProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <Modal
            show={Boolean(project)}
            onClose={onClose}
            className="!overflow-y-auto" // Разрешить прокрутку
            dismissible
        >
            <Modal.Header>{project.title}</Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {project.description}
                    </p>
                    <div className="text-sm text-gray-600">
                        <span className="font-semibold">Технологии: </span>
                        {project.technologies.join(", ")}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};
