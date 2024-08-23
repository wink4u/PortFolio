import { ButtonHTMLAttributes } from "react";
import styles from './slideButtonItem.module.scss';

interface slideButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonClick: () => void;
}
interface slideButtonItemProps {
    value: string;
}

export default function SlideButtonItem({buttonClick, value} : slideButtonProps & slideButtonItemProps) {
    return(
        <button className={styles.slideButton} type="button" onClick={buttonClick}>
          <p>{value}</p>
        </button>
    )
}