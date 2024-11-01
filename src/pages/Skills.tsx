export const Skills = () => {
    return (
        <div className="container mx-auto px-6 py-16 text-gray-800 font-sans max-w-3xl bg-white shadow-lg rounded-lg mt-10 mb-10">
            <h2 className="text-5xl font-bold text-center text-blue-600 mb-10">
                Навыки
            </h2>
            <p className="text-lg leading-relaxed text-center mb-5">
                Вот список навыков и технологий, с которыми я работал:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg">
                    HTML/CSS
                </li>
                <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg">
                    JavaScript (ES6+)
                </li>
                <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg">
                    React.js и React Router
                </li>
                <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg">
                    TypeScript
                </li>
                <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg">
                    SCSS (Sass)
                </li>
                <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg">
                    Node.js и Express
                </li>
                <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg">
                    Git и GitHub
                </li>
                <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg">
                    Работа с REST API
                </li>
                <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg">
                    Основы UX/UI дизайна
                </li>
                <li className="text-lg p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 hover:shadow-lg ">
                    Unity (основы разработки игр)
                </li>
                <div>

                </div>
            </ul>
        </div>
    );
};
