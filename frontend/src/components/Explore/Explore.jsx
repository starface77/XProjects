import Projects from "../Projects/Projects";
import "./style.scss"

function Explore() {
    return (
        <div className="explore-container">
            <div className="explore-controller">
                <div className="div-1">
                    <p className="aboutme">ABOUT ME</p>
                    <span>EXPLORE NOW</span>

                    <div className="about-p">
                        <p>As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.</p>
                        <br />
                        <p>
                            With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible</p>
                    </div>
                </div>
                <div className="div-1">
                    <p className="aboutme">EXPERIENCE</p>
                    <span>EXPLORE NOW</span>
                    <div className="header-text">
                        <div className="left">
                            <p className="webhr">Web / </p>
                            <p>Software Engineer</p>
                        </div>
                        <div className="right">
                            <p>JUNE 2024 - PRESENT, HYDERABAD</p>
                        </div>
                    </div>
                    <div className="about-p">
                        <p>Currently, I'm immersed in developing the frontend for the WebHR Mobile Application. WebHR, developed by Verge Systems Inc., is a Cloud-based Social HR Software tailored for SMEs and utilized in over 160 countries worldwide by numerous organizations for HR management. With 1.5 years of experience as a React.js developer, I possess a robust skill set in crafting dynamic and responsive web and mobile applications.</p>
                        <br />
                        <p>
                            My proficiency in React Native enables me to build cross-platform mobile applications seamlessly compatible with both iOS and Android platforms. Leveraging React.js, I excel in developing swift, scalable, and dynamic web pages, ensuring exceptional user experiences. My expertise lies in component-based architecture and proficient state management, coupled with a keen awareness of the latest trends and technologies in web development.</p>
                    </div>
                    <div className="tech-stack">
                        <div className="div-border">
                            <p>React</p>
                        </div>
                        <div className="div-border">
                            <p>JavaScript</p>
                        </div>
                        <div className="div-border">
                            <p>Sass</p>
                        </div>
                        <div className="div-border">
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>
            <Projects />
        </div>
    );
}

export default Explore;