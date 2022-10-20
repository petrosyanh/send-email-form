import styles from './style.module.scss';
import Message from "../../../svgs/Message";
import { SendButtonProps } from './interface';
import { useTranslation } from "react-i18next";

export const SendButton = ({
  isDisabled,
  isSended,
}: SendButtonProps) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles['submit-button']} ${isDisabled && 'disabled'} ${isSended && styles.sended}`}>
      <button type='submit'>
        <div className={styles['icon-overlay']}>
          <Message />
        </div>
        <span>{isSended ? t('yourMessageSended') : t('send')}</span>
      </button>
    </div>
  )
}