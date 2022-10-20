import styles from './style.module.scss'
import Telegram from "../../../svgs/Telegram";
import Whatsapp from "../../../svgs/Whatsapp";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className={styles['app-footer']}>
            <div className="container">
                <div className={styles['app-footer-mainpanel']}>
                    <div className={styles['app-brand']}>
                        <a href="#">
                            LOGO
                        </a>
                    </div>
                    <div className={styles['footer-listing']}>
                        <div className={styles['listing-headline']}>
                            <h3>
                                Услуги
                            </h3>
                        </div>
                        <div className={styles['listing-overlay']}>
                            <ul>
                                <li><a href="#">Support and development</a></li>
                                <li><a href="#">UI/UX and product design</a></li>
                                <li><a href="#">Progressive Web Applications (PWA)</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles['footer-listing']}>
                        <div className={styles['listing-headline']}>
                            <h3>
                                Компания
                            </h3>
                        </div>
                        <div className={styles['listing-overlay']}>
                            <ul>
                                <li><a href="#">{t('aboutCompany')}</a></li>
                                <li><a href="#">{t('projects')}</a></li>
                                <li><a href="#">{t('contacts')}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles['footer-listing']} ${styles['social']}`} >
                        <div className={styles['listing-inner']}>
                            <div className={styles['listing-headline']}>
                                <h3>
                                    {t('contacts')}
                                </h3>
                            </div>
                            <div className={`${styles['listing-overlay']}`}>
                                <ul>
                                    <li className={styles['download']}><a href="#">{t('downloadPresentation')}</a></li>
                                    <li className={styles['number']}><a href="#">+7 (499) 999-99-99</a></li>
                                    <li><a href="#">info@site.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles['social-media']}>
                            <ul>
                                <li><a href="#"><Telegram /></a></li>
                                <li><a href="#"><Whatsapp /></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={styles['footer-bottom']}>
                    <a href="#">© Company 2022. All rights reserved.</a>
                    <a href="#">{t('privacyPolicy')}</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
