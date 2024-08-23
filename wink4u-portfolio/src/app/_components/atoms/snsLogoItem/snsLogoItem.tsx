import Image, { StaticImageData } from "next/image"
import styles from "./snsLogoItem.module.scss";

interface snsLogoProps {
  img: StaticImageData,
  link: string,
}

export default function snsLogoItem({img, link}: snsLogoProps) {
    return(
      <div className={styles.snsLogoContainer}>
        <a href={link} rel="" className={styles.snsLogoImg}>
          <Image src={img} alt="snsImg" className={styles.snsLogoImg} />
        </a>
      </div>
    )
}