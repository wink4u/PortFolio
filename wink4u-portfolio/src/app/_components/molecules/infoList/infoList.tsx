import INFO_LIST from "@/app/_constants/info";
import InfoItem from "../../atoms/infoItem/infoItem";
import styles from "./infoList.module.scss";

export default function InfoList() {
    return(
      <div className={styles.infoListContainer}>
        <div className={styles.infoList}>  
          {INFO_LIST.map(item => (
              <InfoItem key={item.id} icon={item.icon} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    )
}