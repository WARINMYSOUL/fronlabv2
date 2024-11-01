import { useThemeMode } from "flowbite-react";

export const Skills = () => {
    const { computedMode } = useThemeMode();

    const itemClass = `text-lg p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg ${
        computedMode === "dark" ? "bg-gray-700 hover:bg-gray-600 text-gray-100" : "bg-blue-50 hover:bg-blue-100 text-gray-800"
    }`;

    return (
        <div className={`container mx-auto px-6 py-16 font-sans max-w-3xl mt-5 mb-10 ${
            computedMode === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
        }`}>
            <h2 className={`text-5xl font-bold text-center mb-10 ${
                computedMode === "dark" ? "text-blue-400" : "text-blue-600"
            }`}>
                Навыки
            </h2>
            <p className="text-lg leading-relaxed text-center mb-5">
                Вот список навыков и технологий, с которыми я работал:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <li className={itemClass}>HTML/CSS</li>
                <li className={itemClass}>JavaScript (ES6+)</li>
                <li className={itemClass}>React.js и React Router</li>
                <li className={itemClass}>TypeScript</li>
                <li className={itemClass}>SCSS (Sass)</li>
                <li className={itemClass}>Node.js и Express</li>
                <li className={itemClass}>Git и GitHub</li>
                <li className={itemClass}>Работа с REST API</li>
                <li className={itemClass}>Основы UX/UI дизайна</li>
                <li className={itemClass}>Unity (основы разработки игр)</li>
            </ul>
        </div>
    );
};
