import Link from "next/link";
import styles from "./moveDetail.module.scss";

interface MoveDetailProps {
  href: string;
  back: string;
  color: string;
}
export default function MoveDetail({ href, back, color }: MoveDetailProps) {
    return(
      <div className={styles.moveDetailDiv}>
        <Link href={href} style={{backgroundColor: back, color: color, boxShadow: back}} className={styles.moveDetail}>STACK Detail</Link>
      </div>
    )
}