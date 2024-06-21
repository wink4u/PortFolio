import styles from './contentBox.module.scss'

interface ContentBoxProps {
    children: React.ReactNode;
}

export default function contentBox({children} : ContentBoxProps) {
    return (
        <div className={styles.contentBoxContainer}>
          {children}
        </div>
    )
}