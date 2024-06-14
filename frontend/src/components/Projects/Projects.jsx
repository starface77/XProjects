import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Подключаем компонент Carousel из библиотеки react-responsive-carousel

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Подключаем стили для Carousel
import "./style.scss"; // Подключаем пользовательские стили для компонента Projects
import tg from "../../assets/tgspam.jpg"; // Подключаем изображение для использования в карусели
import Footer from '../Navigation/Footer';

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-controller">
                <p className="aboutme">PROJECTS</p>
                <span>EXPLORE NOW</span>

                <Carousel
                    showThumbs={false}
                    autoPlay={true} // Включаем автопрокрутку
                    infiniteLoop={true}
                    showStatus={false}
                    interval={5000} // Задаем интервал автопрокрутки в миллисекундах (в данном случае 5 секунд)
                    stopOnHover={false} // Отключаем остановку при наведении
                    swipeable={true} // Включаем возможность прокрутки карусели свайпом на мобильных устройствах
                    emulateTouch={true} // Включаем эмуляцию касания на устройствах с мышью
                >
                    <div className="projects-div">
                        <div className="left">
                            <img src={tg} alt="Project" />
                        </div>
                        <div className="right">
                            <p>#React</p>
                            <span>Designed a modern UI website comprising more than 50 screens, along with the integration of a blog using React.js.</span>
                            <a href="github.com/starface77">Click For Go To Github</a>

                        </div>
                    </div>

                    <div className="projects-div">
                        <div className="left">
                            <img src={"https://content.freelancehunt.com/cdn-cgi/image/format=auto,fit=scale-down,width=780,dpr=1,gravity=top/snippet/9f0be/1a381/1841675/raness.png"} alt="Project" />
                        </div>
                        <div className="right">
                            <p>#Css + Html</p>
                            <span>Designed a modern UI website Landing</span>
                            <a href="github.com/starface77">Click For Go To Github</a>

                        </div>
                    </div>
                    <div className="projects-div">
                        <div className="left">
                            <img src={"https://cdn-edge.kwork.ru/files/portfolio/t0_r/26/f3ecf1e935e6100fae312061443d1b6a9cf9e133-1717213654.webp"} alt="Project" />
                        </div>
                        <div className="right">
                            <p>#Css + Html</p>
                            <span>NFT Web-site Designed a modern UI website Landing</span>
                            <a href="https://github.com/starface77">Click For Go To Github</a>

                        </div>
                    </div>
                    <div className="projects-div">
                        <div className="left">
                            <img src={"https://cdn-edge.kwork.ru/files/portfolio/t0/29/5d1def9e4baf98f6829833fb1b2bdcc6b8fc1bf1-1717213553.webp"} alt="Project" />
                        </div>
                        <div className="right">
                            <p>#React + Bootstrap</p>
                            <span>Web-site Using Bootstrap + React.JS</span>
                            <a href="https://github.com/starface77">Click For Go To Github</a>
                        </div>
                    </div>
                </Carousel>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;
