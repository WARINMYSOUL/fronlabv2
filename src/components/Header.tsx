import { useState, useEffect } from "react";
import { Navbar, DarkThemeToggle } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useThemeMode } from "flowbite-react";
import { motion } from "framer-motion";

export function Header() {
    const { computedMode } = useThemeMode();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {/* Wrapper div to add offset when header is sticky */}
            <div className={`${isSticky ? "pt-16" : ""}`}>
                <Navbar
                    fluid
                    className={`${
                        isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg" : ""
                    } py-2 md:py-4 rounded-none ${
                        computedMode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
                    } transition-all duration-300`}
                >
                    <div className="flex items-center justify-between w-full px-2 md:px-4">
                        <div className="flex justify-center w-full space-x-4 md:space-x-8 text-sm md:text-lg">
                            {["/", "/about", "/skills", "/projects", "/contact"].map((path, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <NavLink
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
                                </motion.div>
                            ))}
                        </div>
                        <div className="ml-auto">
                            <DarkThemeToggle />
                        </div>
                    </div>
                </Navbar>
            </div>
        </div>
    );
}
