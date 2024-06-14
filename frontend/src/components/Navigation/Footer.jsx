import "./style.scss"
import social from "../../assets/socialicons.png"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <img src={social} />
                <p>All Rights Reserved SFC-PROJECTS.RU</p>
                <p>© 2024</p>

            </div>
        </div>
    );
}

export default Footer;