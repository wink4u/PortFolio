import { IconType } from 'react-icons';
import styles from './infoitem.module.scss';

interface infoItemtProps {
    icon: IconType;
    title: string;
    content: string;
}

export default function InfoItem({ icon: Icon, title, content}: infoItemtProps) {
    return (
      <>
        <div className={styles.infoItemContainer}>
          <div>
            <span className={styles.infoIcon}><Icon /></span>
          </div>
          <div className={styles.infoItemMain}>
            <p className={styles.infoTitle}>{title}</p>
            <p className={styles.infoContent}>{content}</p>
          </div>
        </div>
      </>
    )
}