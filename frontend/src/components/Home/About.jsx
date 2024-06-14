import React from "react";
import Projects from "../Projects/Projects";
import "./style.scss";
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import Explore from "../Explore/Explore";



function Home() {
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    console.log("1")
  };

  return (
    <div className="main-container">
      <div className="bg-img">
        <div className="controller">
          <div className="center">
            <p className="nickname">{t('STARFACE')}</p>
            <span>{t('123')}</span>
            <p>{t('passionate')}</p>
            <br />
            <div className="button-contact">
              <a href="https://t.me/Starfaceev" className="contactme">{t('Contact')}</a>
            </div>
          </div>
        </div>
      </div>
      <Explore />
    </div>
  );
}

export default Home;
