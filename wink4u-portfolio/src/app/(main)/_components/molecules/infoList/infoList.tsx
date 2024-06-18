import INFO_LIST from "@/app/(main)/_constants/info";
import InfoItem from "../../atoms/infoItem/infoItem";
import styles from "./infolist.module.scss";

export default function InfoList() {
    return(
        <div className={styles.infoList}>  
          {INFO_LIST.map(item => (
              <InfoItem key={item.id} icon={item.icon} title={item.title} content={item.content} />
          ))}
        </div>
    )
}