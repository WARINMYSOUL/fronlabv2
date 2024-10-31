import { Footer as FlowbiteFooter } from "flowbite-react";
import {BsDiscord, BsGithub, BsSteam, BsTelegram, BsTwitterX} from "react-icons/bs";



export const Footer = () => {
    return (
        <FlowbiteFooter container className="bg-gray-900 text-white">
            <div className="w-full flex flex-col items-center">
                <div className="grid w-full justify-center text-center sm:flex sm:justify-center md:grid-cols-1 gap-5">
                    <div>
                        <FlowbiteFooter.Title title="О проекте" className="text-white"/>
                        <FlowbiteFooter.LinkGroup col className="flex flex-col items-center">
                            <FlowbiteFooter.Link href="#">Цели проекта</FlowbiteFooter.Link>
                            <FlowbiteFooter.Link href="#">Используемые технологии</FlowbiteFooter.Link>
                            <FlowbiteFooter.Link href="#">Команда разработки</FlowbiteFooter.Link>
                        </FlowbiteFooter.LinkGroup>
                    </div>
                    <div>
                        <FlowbiteFooter.Title title="Связь со мной" className="text-white"/>
                        <FlowbiteFooter.LinkGroup col className="flex flex-col items-center">
                            <FlowbiteFooter.Link href="https://github.com/WARINMYSOUL">GitHub</FlowbiteFooter.Link>
                            <FlowbiteFooter.Link
                                href="https://linkedin.com/in/yourusername">LinkedIn</FlowbiteFooter.Link>
                            <FlowbiteFooter.Link href="mailto:lunev.avy@students.dvfu.ru">Электронная
                                почта</FlowbiteFooter.Link>
                        </FlowbiteFooter.LinkGroup>
                    </div>
                    <div>
                        <FlowbiteFooter.Title title="Полезные ссылки" className="text-white"/>
                        <FlowbiteFooter.LinkGroup col className="flex flex-col items-center">
                            <FlowbiteFooter.Link href="#">Документация проекта</FlowbiteFooter.Link>
                            <FlowbiteFooter.Link href="#">Часто задаваемые вопросы</FlowbiteFooter.Link>
                            <FlowbiteFooter.Link href="#">Поддержка</FlowbiteFooter.Link>
                        </FlowbiteFooter.LinkGroup>
                    </div>
                </div>

                <FlowbiteFooter.Divider className="border-gray-700 w-full my-4"/>
                <div className="flex justify-center space-x-6">
                    <FlowbiteFooter.Icon href="https://t.me/WaR_IN_MY_SOUL" icon={BsTelegram}/>
                    <FlowbiteFooter.Icon href="https://discord.gg/mSeb85Fa" icon={BsDiscord}/>
                    <FlowbiteFooter.Icon href="https://x.com/WARINMYSOU12510" icon={BsTwitterX} />
                    <FlowbiteFooter.Icon href="https://github.com/WARINMYSOUL" icon={BsGithub}/>
                    <FlowbiteFooter.Icon href="https://steamcommunity.com/id/WAR_IN_MY_SOUL/" icon={BsSteam}/>
                </div>
                <FlowbiteFooter.Copyright href="#" by="AlexanderComputers™" year={2024} className="mt-4 text-center"/>
            </div>
        </FlowbiteFooter>
    );
};
