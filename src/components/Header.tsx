import { Navbar, DarkThemeToggle } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useThemeMode } from "flowbite-react";

export function Header() {
    const { computedMode } = useThemeMode();

    return (
        <Navbar
            fluid
            className={`py-2 md:py-4 rounded-none ${
                computedMode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
            }`}
        >
            <div className="flex items-center justify-between w-full px-2 md:px-4">
                <div className="flex justify-center w-full space-x-4 md:space-x-8 text-sm md:text-lg"> {/* Оставляем в одну строку */}
                    {["/", "/about", "/skills", "/projects", "/contact"].map((path, idx) => (
                        <NavLink
                            key={idx}
                            to={path}
                            end={path === "/"}
                            className={({ isActive }) =>
                                `hover:text-gray-300 transition-colors ${
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
                </div>
                <div className="ml-auto">
                    <DarkThemeToggle />
                </div>
            </div>
        </Navbar>
    );
}
