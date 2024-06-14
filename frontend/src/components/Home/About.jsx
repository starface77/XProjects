import Explore from "../Explore/Explore";
import "./style.scss"

function Home() {
    return (
        <div className="main-container">
            <div className="bg-img">
                <div className="controller">
                    <div className="center">
                        <p className="nickname">STARFACE!</p>
                        <span>I do Code & Chill 🍿</span>
                        <p>
                            Passionate software engineer with a focus on front-end development, dedicated to crafting elegant and user-friendly mobile applications.</p>
                        <br />
                        <div className="button-contact">
                            <a href="https://t.me/Starfaceev" className="contactme">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
            <Explore />
        </div>
    );
}

export default Home;