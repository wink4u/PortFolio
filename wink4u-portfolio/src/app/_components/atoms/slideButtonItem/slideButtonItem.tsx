import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from './slideButtonItem.module.scss';

interface slideButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonClick: () => void;
    isActive: boolean;
}
interface slideButtonItemProps {
    value: string;
}

export default function SlideButtonItem({buttonClick, value, isActive} : slideButtonProps & slideButtonItemProps) {
    return(
        <button className={classNames(styles.slideButton, isActive ? styles.isActive : '')} type="button" onClick={buttonClick}>
          <p>{value}</p>
        </button>
    )
}