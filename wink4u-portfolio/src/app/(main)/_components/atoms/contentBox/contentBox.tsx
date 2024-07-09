import styles from './contentBox.module.scss'

interface ContentBoxProps {
    children: React.ReactNode;
    boxWidth?: string;
}

export default function ContentBox({children, boxWidth, ...rest} : ContentBoxProps) {
    return (
        <div className={styles.contentBoxContainer} style={{ width: boxWidth}} {...rest}>
          {children}
        </div>
    )
}

ContentBox.defaultProps = {
  boxwidth: '100%'
}