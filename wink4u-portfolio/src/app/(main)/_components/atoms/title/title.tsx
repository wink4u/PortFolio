import styles from './title.module.scss';

interface titleProps {
    value: string;
}

export default function Title({ value } : titleProps) {
    return (
        <div className={styles.titleContainer}>
            <p className={styles.title}>{value}</p>
        </div>
    )
}