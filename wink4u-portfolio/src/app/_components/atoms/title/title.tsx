import styles from './title.module.scss';

interface titleProps {
    value: string;
    color?: string;
}

export default function Title({ value, color } : titleProps) {
    return (
        <div className={styles.titleContainer}>
            <p style={{color: color}} className={styles.title}>{value}</p>
        </div>
    )
}