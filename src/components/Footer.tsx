import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsDiscord, BsGithub, BsSteam, BsTelegram, BsTwitterX } from "react-icons/bs";
import { useThemeMode } from "flowbite-react";

export const Footer = () => {
    const { computedMode } = useThemeMode();

    return (
        <FlowbiteFooter
            container
            className={`w-full  py-6 rounded-none ${
                computedMode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
            }`}
        >
            <div className="w-full flex flex-col items-center mb-10 mt-5">
                <div className="grid w-full justify-center text-center sm:flex sm:justify-center md:grid-cols-1 gap-5">
                    <FooterSection title="О проекте" links={["Цели проекта", "Используемые технологии", "Команда разработки"]} />
                    <FooterSection
                        title="Связь со мной"
                        links={[
                            { href: "https://github.com/WARINMYSOUL", text: "GitHub" },
                            { href: "https://linkedin.com/in/yourusername", text: "LinkedIn" },
                            { href: "mailto:lunev.avy@students.dvfu.ru", text: "Электронная почта" }
                        ]}
                    />
                    <FooterSection title="Полезные ссылки" links={["Документация проекта", "Часто задаваемые вопросы", "Поддержка"]} />
                </div>

                <FlowbiteFooter.Divider className="border-gray-700 w-full my-4" />
                <div className="flex justify-center space-x-6">
                    <FlowbiteFooter.Icon href="https://t.me/WaR_IN_MY_SOUL" icon={BsTelegram} />
                    <FlowbiteFooter.Icon href="https://discord.gg/mSeb85Fa" icon={BsDiscord} />
                    <FlowbiteFooter.Icon href="https://x.com/WARINMYSOU12510" icon={BsTwitterX} />
                    <FlowbiteFooter.Icon href="https://github.com/WARINMYSOUL" icon={BsGithub} />
                    <FlowbiteFooter.Icon href="https://steamcommunity.com/id/WAR_IN_MY_SOUL/" icon={BsSteam} />
                </div>
                <FlowbiteFooter.Copyright href="#" by="AlexanderComputers™" year={2024} className="mt-4 text-center" />
            </div>
        </FlowbiteFooter>
    );
};

const FooterSection = ({ title, links }: { title: string; links: (string | { href: string; text: string })[] }) => {
    const { computedMode } = useThemeMode();
    return (
        <div>
            <FlowbiteFooter.Title
                title={title}
                className={`${computedMode === "dark" ? "text-white" : "text-gray-800"}`}
            />
            <FlowbiteFooter.LinkGroup col className="flex flex-col items-center">
                {links.map((link, idx) =>
                    typeof link === "string" ? (
                        <FlowbiteFooter.Link href="#" key={idx}>
                            {link}
                        </FlowbiteFooter.Link>
                    ) : (
                        <FlowbiteFooter.Link href={link.href} key={idx}>
                            {link.text}
                        </FlowbiteFooter.Link>
                    )
                )}
            </FlowbiteFooter.LinkGroup>
        </div>
    );
};
