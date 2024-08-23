import Image, { StaticImageData } from "next/image"
import styles from './skillList.module.scss'
import ContentBox from "../../atoms/contentBox/contentBox";

interface skillListProps {
    subTitle: string;
    img: StaticImageData;
}

export default function skillList({subTitle, img} : skillListProps) {
    return(
      <ContentBox boxWidth="400px">
        <div className={styles.skillList}>
          <div className={styles.subTitleContainer}>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
          <hr />
          <div className={styles.imgContainer}>
            <Image src={img} alt="skillImg" className={styles.skillImg} />
          </div>
        </div>
      </ContentBox>
    )
} 