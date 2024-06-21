import Image, { StaticImageData } from "next/image"
import styles from './skilllist.module.scss'
import ContentBox from "../../atoms/contentBox/contentBox";

interface skillItem {
    id: number;
    img: StaticImageData;
}

interface skillListProps {
    skills: skillItem[];
}

export default function skillList({skills} : skillListProps) {
    return(
        <ContentBox>
          <div className={styles.skillList}>
            {skills.map(skill => (
              <div key={skill.id} className = {styles.skillImgArticle}>
                <Image src={skill.img} alt={`${skill.id}`} className={styles.skillImg}/>
              </div>
            ))}
          </div>
        </ContentBox>
    )
}