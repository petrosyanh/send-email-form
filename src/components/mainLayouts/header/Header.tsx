import { NavLink } from 'react-router-dom';
import { updateLanguageToEnglish, updateLanguageToRussian } from '../../../translations/i18n';
import styles from './style.module.scss'
import i18n from "i18next";
import { useState } from 'react';
import { useTranslation } from "react-i18next";

function Header() {

    const [language, setLanguage] = useState(i18n.language);

    const { t } = useTranslation()

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <header className={styles['app-header']}>
            <div className="container-big">
                <div className={styles['app-header-mainpanel']}>
                    <div className={styles['app-brand']}>
                        <NavLink to="/">
                            LOGO
                        </NavLink>
                    </div>
                    <div className={`${styles['user-action-overlay']} ${isActive ? styles.show : null}`}>
                        <nav className={styles['app-navigation']}>
                            <ul>
                                <li>
                                    <NavLink
                                        to="projects"
                                        className={({ isActive }) =>
                                            isActive ? styles['active'] : ""
                                        }
                                    >
                                        {t('projects')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="aboutUs"
                                        className={({ isActive }) =>
                                            isActive ? styles['active'] : ""
                                        }
                                    >
                                        {t('aboutCompany')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="contacts"
                                        className={({ isActive }) =>
                                            isActive ? styles['active'] : ""
                                        }
                                    >
                                        {t('contacts')}
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles['user-actions']}>
                            <div className={styles['language-switcher']}>
                                <ul>
                                    <li
                                        className={language === 'ru' ? styles['active'] : ""}
                                        onClick={() => {
                                            updateLanguageToRussian();
                                            setLanguage(i18n.language);
                                        }}
                                    >
                                        RU
                                    </li>
                                    <li
                                        className={language === 'en' ? styles['active'] : ""}
                                        onClick={() => {
                                            updateLanguageToEnglish();
                                            setLanguage(i18n.language);
                                        }}
                                    >
                                        EN
                                    </li>
                                </ul>
                            </div>
                            <div className={styles['header-button']}>
                                <div className={styles['button-overlay']}>
                                    <NavLink to="newProject">
                                        {t('startProject')}
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['mobile-button']}>
                        <button type='button' onClick={handleToggle} className={`${isActive ? styles.opened : null}`}>
                            <span className={styles['circle']}></span>
                            <span className={`${styles['circle']} ${styles['centered']}`}></span>
                            <span className={styles['circle']}></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
