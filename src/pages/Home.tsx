import { useThemeMode } from "flowbite-react";

export const Home = () => {
    const { computedMode } = useThemeMode();

    return (
        <main className={`flex flex-col justify-center items-center min-h-screen text-center py-40 ${
            computedMode === "dark" ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white" : "bg-gradient-to-b from-gray-100 to-gray-50 text-gray-800"
        }`}>
            <div className={`max-w-3xl p-10 rounded-lg mt-10 mb-10 px-6 ${
                computedMode === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
            }`}>
                <h1 className="text-5xl font-bold mb-5">
                    Привет, меня зовут <span className="text-blue-600">Александр</span>
                </h1>
                <p className="text-lg leading-relaxed mb-8">
                    Добро пожаловать на мой сайт портфолио!
                </p>

                <hr className="border-t-2 border-gray-300 mb-8 w-3/4 mx-auto"/>

                <p className="text-lg leading-relaxed mb-10">
                    Здесь вы найдете информацию о моих проектах, навыках и интересах. Этот сайт — моя творческая
                    площадка, где я делюсь своим опытом и стремлениями в мире веб-разработки.
                </p>

                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-5 text-blue-600">Мои цели</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Моя цель — стать профессиональным разработчиком, который может решать сложные задачи и
                        разрабатывать качественные веб-приложения, которые улучшают опыт пользователей.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Я стремлюсь к постоянному обучению, чтобы идти в ногу с новыми технологиями и подходами в
                        программировании.
                    </p>
                </section>

                <a
                    href="/projects"
                    className={`inline-flex items-center justify-center mb-10 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 ${
                        computedMode === "dark" ? "bg-blue-700 hover:bg-green-600 text-white" : "bg-blue-500 hover:bg-green-600 text-white"
                    }`}
                >
                    Посмотреть мои проекты
                </a>
            </div>
        </main>
    );
};
