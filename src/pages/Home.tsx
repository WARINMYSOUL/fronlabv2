export const Home = () => {
    return (
        <main
            className="flex justify-center items-center min-h-screen text-center py-40 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="max-w-3xl bg-gray-100 p-10 rounded-lg shadow-lg mt-10 mb-10">
                <h1 className="text-5xl font-bold text-gray-800 mb-5">
                    Привет, меня зовут <span className="text-blue-600">Александр</span>
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Добро пожаловать на мой сайт портфолио!
                </p>

                <hr className="border-t-2 border-gray-300 mb-8 w-3/4 mx-auto"/>

                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                    Здесь вы найдете информацию о моих проектах, навыках и интересах. Этот сайт — моя творческая
                    площадка, где я делюсь своим опытом и стремлениями в мире веб-разработки.
                </p>

                <a
                    href="/projects"
                    className="inline-flex items-center justify-center mb-10 bg-blue-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                >
                    Посмотреть мои проекты
                </a>

            </div>
        </main>
    );
};
