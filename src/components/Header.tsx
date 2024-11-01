import { Navbar, DarkThemeToggle } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useThemeMode } from "flowbite-react";

export function Header() {
    const { computedMode } = useThemeMode();

    return (
        <Navbar
            fluid
            rounded
            className={`py-4 ${
                computedMode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
            }`}
        >
            <div className="flex items-center justify-between w-full px-4">
                <div className="flex justify-center w-full">
                    <Navbar.Collapse className="flex justify-center space-x-8 text-lg">
                        {["/", "/about", "/skills", "/projects", "/contact"].map((path, idx) => (
                            <NavLink
                                key={idx}
                                to={path}
                                end={path === "/"}
                                className={({ isActive }) =>
                                    `hover:text-gray-300 ${
                                        isActive
                                            ? "text-gray-300"
                                            : computedMode === "dark"
                                                ? "text-white"
                                                : "text-gray-800 hover:text-gray-500"
                                    }`
                                }
                            >
                                {["Главная", "Обо мне", "Навыки", "Проекты", "Контакты"][idx]}
                            </NavLink>
                        ))}
                    </Navbar.Collapse>
                </div>
                <div className="ml-auto">
                    <DarkThemeToggle />
                </div>
            </div>
        </Navbar>
    );
}
