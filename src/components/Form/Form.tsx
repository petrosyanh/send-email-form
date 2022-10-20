import React, { useState } from 'react';
import styles from './style.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SendButton } from './SendButton/SendButton';
import { useTranslation } from "react-i18next";

function Form() {

    const [agreeWithTerms, setAgreeWithTerms] = useState(false);
    const [messageSended, setMessageSended] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            comment: '',
        },
        // validate,
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            comment: Yup.string()
                .required('Comment is required'),
        }),
        onSubmit: () => {
            setMessageSended(true);
        },
    });

    const { t } = useTranslation();

    return (
        <section className={styles['form-section']}>
            <div className="container">
                <div className={styles['section-headline']}>
                    <div className={styles['section-heading']}>
                        <h1>
                            {t('weAreAround')}
                        </h1>
                    </div>
                    <div className={styles['section-description']}>
                        <p>
                            {t('emailUs')}
                            <a href="#"> info@site.com</a>
                        </p>
                    </div>
                </div>
                <div className={styles['form-overlay']}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles['form-mainpanel']}>
                            <div className={styles['form-inner']}>
                                <div className={`${styles['form-group']} ${styles['name-place']}`}>
                                    <input
                                        type="text"
                                        id="name"
                                        className={formik.values.name && styles.filled}
                                        {...formik.getFieldProps('name')}
                                    />
                                    <label htmlFor="name">{t('yourName')} <span>*</span> </label>
                                    {(formik.touched?.name && formik.errors?.name) && <span style={{ color: 'red' }}>{formik.errors.name}</span>}
                                </div>
                                <div className={`${styles['form-group']} ${styles['email-place']}`}>
                                    <input
                                        type="text"
                                        id="email"
                                        className={formik.values.email && styles.filled}
                                        {...formik.getFieldProps('email')}
                                    />
                                    <label htmlFor="email">{t('yourEmail')} <span>*</span> </label>
                                    {(formik.touched?.email && formik.errors?.email) && <span style={{ color: 'red' }}>{formik.errors.email}</span>}
                                </div>
                                <div className={styles['comments']}>
                                    <label htmlFor="comment">{t('commentaries')} <span>*</span> </label>
                                    <textarea
                                        id="comment"
                                        className={formik.values.comment  && 'filled'}
                                        {...formik.getFieldProps('comment')}
                                    />
                                    {(formik.touched?.comment && formik.errors?.comment) && <span style={{ color: 'red' }}>{formik.errors.comment}</span>}
                                </div>
                                <div className={styles['terms']}>
                                    <input
                                        checked={agreeWithTerms}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgreeWithTerms(e.target.checked)}
                                        type="radio"
                                    />
                                    <label htmlFor="">{t('iAgreeWith')} <a href="#">{t('privacyPolicy')}</a></label>
                                </div>
                            </div>
                            <SendButton isDisabled={!agreeWithTerms} isSended={messageSended} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Form;
