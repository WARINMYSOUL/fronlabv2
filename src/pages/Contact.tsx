import { useThemeMode } from "flowbite-react";
import { useState } from "react";

export const Contact = () => {
    const { computedMode } = useThemeMode();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert("Пожалуйста, заполните все поля формы.");
            return;
        }
        if (!validateEmail(email)) {
            alert("Пожалуйста, введите корректный email.");
            return;
        }

        // Отправка формы
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className={`container font-sans max-w-lg mx-auto mb-5 ${
            computedMode === "dark" ? "text-gray-100" : "text-gray-800"
        }`}>
            <h1 className={`text-4xl mb-5 text-center ${computedMode === "dark" ? "text-white" : "text-black"}`}>
                Контакты
            </h1>
            <p className={`text-lg mb-5 text-center ${computedMode === "dark" ? "text-gray-300" : "text-black"}`}>
                Если у вас есть вопросы, не стесняйтесь обращаться!
            </p>
            <form onSubmit={handleSubmit} className={`container p-5 rounded-lg shadow-md ${
                computedMode === "dark" ? "bg-gray-800" : "bg-white"
            }`}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">Имя:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ваш email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1">Сообщение:</label>
                    <textarea
                        id="message"
                        placeholder="Ваше сообщение"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm min-h-[100px] resize-y"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className={`w-full p-3 rounded-md text-lg transition-colors ${
                        computedMode === "dark" ? "bg-blue-700 text-white hover:bg-blue-800" : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                >
                    Отправить
                </button>
            </form>
            {isSubmitted && (
                <p className="mt-5 text-green-500 text-center">
                    Спасибо за ваше сообщение!
                </p>
            )}
        </div>
    );
};
