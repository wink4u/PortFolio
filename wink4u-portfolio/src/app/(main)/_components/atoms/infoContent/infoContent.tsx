import styles from './infocontent.module.scss';

interface infoContentProps {
    image: string;
    title: string;
    content: string;
}

export default function InfoContent({ image, title, content}: infoContentProps) {
    return (
      <>
        <div className={styles.infoContentContainer}>
          <div>
            {image}
          </div>
          <div className={styles.infoContentMain}>
            <p>{title}</p>
            <p>{content}</p>
          </div>
        </div>
      </>
    )
}