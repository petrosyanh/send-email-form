import styles from './styles.module.scss'
export const NotFoundPage404 = () => {
  return (
      <div className={styles['not-found']}>
          <h1>
              <span className={`${styles['fade-in']} ${styles['digit1']}`} >4</span>
              <span className={`${styles['fade-in']} ${styles['digit2']}`}>0</span>
              <span className={`${styles['fade-in']} ${styles['digit3']}`}>4</span>
          </h1>
          <p>
              Page Not Found
          </p>
      </div>
  )
}