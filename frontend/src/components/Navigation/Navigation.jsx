import Home from "../Home/About";
import Footer from "./Footer";
import logo from "../../assets/logopng.png"
import "./style.scss"

function Navigation() {
    function scroll() {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
          });
    }
    return (
        <div className="nav-container">
            <div className="nav-controller">
                <div className="left-content">
                    <div className="logo">
                        <img src={logo} />
                        <p>STARFACE</p>
                    </div>
                    <span>DEV</span>
                </div>
                <div className="right-content">
                    <a onClick={scroll}>About Me</a>
                    <a href="https://t.me/Starfaceev" className="contact">Contact</a>
                </div>
            </div>
            <Home />
        </div>
    );
}

export default Navigation;