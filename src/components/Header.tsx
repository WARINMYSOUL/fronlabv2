import {Navbar} from "flowbite-react";
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <Navbar fluid rounded className="bg-gray-900 text-white py-4">
            <div className="flex justify-center w-full">
                <Navbar.Collapse className="flex justify-center space-x-8 text-lg">
                    <NavLink
                        to="/"
                        end
                        className={({isActive}) => isActive ? "text-gray-300" : "text-white hover:text-gray-300"}
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({isActive}) => isActive ? "text-gray-300" : "text-white hover:text-gray-300"}
                    >
                        Обо мне
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={({isActive}) => isActive ? "text-gray-300" : "text-white hover:text-gray-300"}
                    >
                        Навыки
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({isActive}) => isActive ? "text-gray-300" : "text-white hover:text-gray-300"}
                    >
                        Проекты
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({isActive}) => isActive ? "text-gray-300" : "text-white hover:text-gray-300"}
                    >
                        Контакты
                    </NavLink>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
