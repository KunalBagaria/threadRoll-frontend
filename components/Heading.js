import styles from '../styles/Components.module.scss'

export const Heading = ({ text }) => (
    <h1 className={styles.heading}>
        {text}
    </h1>
)