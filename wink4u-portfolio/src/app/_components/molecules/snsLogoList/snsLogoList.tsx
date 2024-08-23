import { SNS_LIST } from "@/app/_constants/sns";
import SnsLogoItem from "../../atoms/snsLogoItem/snsLogoItem";
import styles from "./snsLogoList.module.scss";

export default function snsLogoList() {
    return(
        <div className={styles.snsLogoListContainer}>
          {SNS_LIST.map(item => (
            <SnsLogoItem key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
    )
}