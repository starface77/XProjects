import "./style.scss"
import social from "../../assets/socialicons.png"
import { initReactI18next, useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footer-container">
                <img src={social} />
                <p>{t('All Rights Reserved SFC - PROJECTS.RU')}</p>
                <p>© 2024</p>

            </div>
        </div>
    );
}

export default Footer;