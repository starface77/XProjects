import React from 'react';
import Home from '../Home/About';
import Explore from '../Explore/Explore';
import Footer from './Footer';
import logo from '../../assets/logopng.png';
import './style.scss';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import ruTranslation from '../../locale/ru.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "STARFACE": "STARFACE",
                    "DEV": "DEV",
                    "123": "I do Code & Chill 🍿",
                    "PROJECTS": "PROJECTS",
                    "EXPLORE NOW": "EXPLORE NOW",
                    "#React": "#React",
                    "#Css + Html": "#Css + Html",
                    "NFT Web-site Designed a modern UI website Landing": "NFT Web-site. Designed a modern UI website Landing",
                    "Web-site Using Bootstrap + React.JS": "Web-site Using Bootstrap + React.JS",
                    "Click For Go To Github": "Click For Go To Github",
                    "passionate": "Passionate software engineer with a focus on front-end development, dedicated to crafting elegant and user-friendly mobile applications.",
                    "Contact": "Contact Me",
                    "About": "About",
                    "Contacts": "Contacts",
                    "ABOUT ME": "ABOUT ME",
                    "EXPLORE NOW": "EXPLORE NOW",
                    "As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.": "As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.",
                    "With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible": "With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible",
                    "EXPERIENCE": "EXPERIENCE",
                    "Currently, I'm immersed in developing the frontend for the WebHR Mobile Application. WebHR, developed by Verge Systems Inc., is a Cloud-based Social HR Software tailored for SMEs and utilized in over 160 countries worldwide by numerous organizations for HR management. With 1.5 years of experience as a React.js developer, I possess a robust skill set in crafting dynamic and responsive web and mobile applications.": "Currently, I'm immersed in developing the frontend for the WebHR Mobile Application. WebHR, developed by Verge Systems Inc., is a Cloud-based Social HR Software tailored for SMEs and utilized in over 160 countries worldwide by numerous organizations for HR management. With 1.5 years of experience as a React.js developer, I possess a robust skill set in crafting dynamic and responsive web and mobile applications.",
                    "My proficiency in React Native enables me to build cross-platform mobile applications seamlessly compatible with both iOS and Android platforms. Leveraging React.js, I excel in developing swift, scalable, and dynamic web pages, ensuring exceptional user experiences. My expertise lies in component-based architecture and proficient state management, coupled with a keen awareness of the latest trends and technologies in web development.": "My proficiency in React Native enables me to build cross-platform mobile applications seamlessly compatible with both iOS and Android platforms. Leveraging React.js, I excel in developing swift, scalable, and dynamic web pages, ensuring exceptional user experiences. My expertise lies in component-based architecture and proficient state management, coupled with a keen awareness of the latest trends and technologies in web development.",
                    "React": "React",
                    "JavaScript": "JavaScript",
                    "Sass": "Sass",
                    "Bootstrap": "Bootstrap",
                    "All Rights Reserved SFC - PROJECTS.RU": "All Rights Reserved SFC - PROJECTS.RU",
                    "© 2024": "© 2024",

                }
            },
            ru: {
                translation: {
                    "PROJECTS": "ПРОЕКТЫ",
                    "EXPLORE NOW": "ИССЛЕДОВАТЬ СЕЙЧАС",
                    "#React": "#Реакт",
                    "#Css + Html": "#Css + Html",
                    "NFT Web-site Designed a modern UI website Landing": "NFT-веб-сайт. Разработка современного интерфейса веб-сайта Landing",
                    "Web-site Using Bootstrap + React.JS": "Веб-сайт с использованием Bootstrap + React.JS",
                    "Click For Go To Github": "Нажмите, чтобы перейти на GitHub",
                    "STARFACE": "СТАРФЕЙС",
                    "DEV": "ДЕВ",
                    "123": "Я занимаюсь Code & Chill 🍿",
                    "Contact": "Свяжитесь со мной",
                    "passionate": "Увлеченный инженер-программист, специализирующийся на фронтенд-разработке, занимающийся созданием элегантных и удобных мобильных приложений.",
                    "About": "О Нас",
                    "Contacts": "Контакты",
                    "ABOUT ME": "ОБО МНЕ",
                    "EXPLORE NOW": "ИССЛЕДОВАТЬ СЕЙЧАС",
                    "As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.": "Как страстный программист, я процветаю на сложном взаимодействии между логикой и креативностью. В настоящее время я погружен в динамичный мир WebHR, моя экспертиза сосредоточена вокруг React Native, где я безупречно сочетаю технологии с инновациями.",
                    "With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible": "С увлечением создания элегантных решений я навигирую по постоянно развивающемуся миру разработки программного обеспечения. Мой путь включает в себя перевод концепций в код, создание безупречных пользовательских интерфейсов и постоянное расширение границ того, что возможно",
                    "EXPERIENCE": "ОПЫТ РАБОТЫ",
                    "Currently, I'm immersed in developing the frontend for the WebHR Mobile Application. WebHR, developed by Verge Systems Inc., is a Cloud-based Social HR Software tailored for SMEs and utilized in over 160 countries worldwide by numerous organizations for HR management. With 1.5 years of experience as a React.js developer, I possess a robust skill set in crafting dynamic and responsive web and mobile applications.": "В настоящее время я погружен в разработку интерфейса для мобильного приложения WebHR. WebHR, разработанный компанией Verge Systems Inc., является облачным социальным программным обеспечением для управления персоналом, адаптированным для малого и среднего бизнеса и используемым в более чем 160 странах мира многочисленными организациями для управления персоналом. С 1,5-летним опытом работы в качестве разработчика React.js, я обладаю крепким набором навыков для создания динамичных и адаптивных веб- и мобильных приложений.",
                    "My proficiency in React Native enables me to build cross-platform mobile applications seamlessly compatible with both iOS and Android platforms. Leveraging React.js, I excel in developing swift, scalable, and dynamic web pages, ensuring exceptional user experiences. My expertise lies in component-based architecture and proficient state management, coupled with a keen awareness of the latest trends and technologies in web development.": "Мое владение React Native позволяет мне создавать кросс-платформенные мобильные приложения, полностью совместимые как с iOS, так и с Android. Используя React.js, я отлично разрабатываю быстрые, масштабируемые и динамические веб-страницы, обеспечивая исключительные пользовательские интерфейсы. Моя экспертиза лежит в архитектуре на основе компонентов и управлении состоянием, а также в глубоком понимании последних тенденций и технологий в веб-разработке.",
                    "React": "Реакт",
                    "JavaScript": "JavaScript",
                    "Sass": "Sass",
                    "Bootstrap": "Bootstrap",
                    "All Rights Reserved SFC - PROJECTS.RU": "Все права защищены SFC-PROJECTS.RU",
                    "© 2024": "© 2024",


                }
            },

        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

function Navigation() {

    const { t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ru' : 'en'; // Toggle between 'en' and 'ru'
        i18n.changeLanguage(newLang); // Change language
        console.log("1")
    };

    const scroll = () => {
        window.scrollTo({
            top: 550,
            behavior: 'smooth',
        });
    };

    return (
        <div className="nav-container">
            <div className="nav-controller">
                <div className="left-content">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <p>{t('STARFACE')}</p>
                    </div>
                    <span>{t('DEV')}</span>
                </div>
                <div className="right-content">
                    <a onClick={scroll}>{t('About')}</a>
                    <a href="https://t.me/Starfaceev" className="contact">{t('Contacts')}</a>
                    <select onChange={toggleLanguage}>
                        <option value="en">{t('ENG')}</option>
                        <option value="ru">{t('RU')}</option>
                    </select>
                </div>
            </div>
            <Home />
        </div>
    );
}

export default Navigation;
