import Link from "next/link";
import styles from "./moveDetail.module.scss";

interface MoveDetailProps {
  href: string;
  back: string;
  color: string;
  content: string;
}
export default function MoveDetail({ href, back, color, content }: MoveDetailProps) {
    return(
      <div className={styles.moveDetailDiv}>
        <Link href={href} style={{backgroundColor: back, color: color, boxShadow: back}} className={styles.moveDetail}>{content}</Link>
      </div>
    )
}