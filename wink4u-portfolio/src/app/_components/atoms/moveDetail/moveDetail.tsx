import Link from "next/link";
import styles from "./moveDetail.module.scss";

interface MoveDetailProps {
  href: string;
  back: string;
}
export default function MoveDetail({ href, back }: MoveDetailProps) {
    return(
      <div>
        <Link href={href} style={{backgroundColor: back}} className={styles.moveDetail}>계정 만들기</Link>
      </div>
    )
}