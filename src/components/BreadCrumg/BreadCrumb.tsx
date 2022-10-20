import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

function BreadCrumb() {
    const { t } = useTranslation();

    return (
        <section className={styles['section-breadCrumb']}>
            <div className="container">
                <div className={styles['breadCrumb-listing']}>
                    <ul>
                        <li className={styles['prev']}><a href="#">{t('home')}</a></li>
                        <li className={styles['current']}><a href="#">- {t('contacts')}</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default BreadCrumb;
