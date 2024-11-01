import { useThemeMode } from "flowbite-react";

export const About = () => {
    const { computedMode } = useThemeMode();

    return (
        <div className={`container mx-auto px-6 py-16 font-sans max-w-4xl mb-5 mt-10 ${
            computedMode === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
        }`}>
            <h2 className={`text-5xl font-bold text-center mb-10 ${
                computedMode === "dark" ? "text-blue-400" : "text-blue-600"
            }`}>
                Обо мне
            </h2>
            <p className="text-lg leading-relaxed mb-10 text-justify">
                Привет! Я студент ДВФУ, изучаю и увлечен веб-разработкой. Моё обучение и проекты помогают мне
                погружаться в мир современных технологий и практиковаться в создании интерактивных веб-приложений.
            </p>

            <section className="mb-12">
                <h3 className={`text-3xl font-semibold mb-4 border-b-2 inline-block ${
                    computedMode === "dark" ? "text-gray-100 border-blue-400" : "text-gray-900 border-blue-500"
                }`}>
                    Образование
                </h3>
                <p className="text-lg leading-relaxed text-justify">
                    Я учусь на 3 курсе в ДВФУ. Моя специализация — Системное программирование, и она охватывает всё, начиная с основ
                    программирования и заканчивая созданием сложных веб-приложений. Учебные курсы, такие как веб-разработка,
                    базы данных и алгоритмы, формируют моё глубокое понимание современных технологий.
                </p>
            </section>

            <section className="mb-12">
                <h3 className={`text-3xl font-semibold mb-4 border-b-2 inline-block ${
                    computedMode === "dark" ? "text-gray-100 border-blue-400" : "text-gray-900 border-blue-500"
                }`}>
                    Проекты
                </h3>
                <p className="text-lg leading-relaxed text-justify mb-5">
                    В процессе обучения я работал над несколькими интересными проектами:
                </p>
                <ul className="list-disc ml-8 space-y-3">
                    <li className="text-lg">Разработка личного портфолио с использованием React и TypeScript</li>
                    <li className="text-lg">Создание веб-приложения для управления задачами с возможностью фильтрации и поиска</li>
                    <li className="text-lg">Интеграция с REST API для динамического отображения данных в приложениях</li>
                    <li className="text-lg">Адаптивная верстка с использованием SCSS и Tailwind CSS</li>
                </ul>
            </section>

            <section className="mb-12">
                <h3 className={`text-3xl font-semibold mb-4 border-b-2 inline-block ${
                    computedMode === "dark" ? "text-gray-100 border-blue-400" : "text-gray-900 border-blue-500"
                }`}>
                    Интересы
                </h3>
                <p className="text-lg leading-relaxed text-justify">
                    Помимо программирования, я увлекаюсь играми. Меня особенно интересует, как создаются игры, какие
                    механики лежат в их основе и как сделать игровой процесс захватывающим. Я активно изучаю игровые движки,
                    такие как Unity, и пробую разрабатывать собственные проекты. Игры для меня — это не только способ
                    расслабиться, но и отличное вдохновение для разработки новых идей, что помогает улучшать мои навыки в
                    программировании.
                </p>
            </section>
        </div>
    );
};
