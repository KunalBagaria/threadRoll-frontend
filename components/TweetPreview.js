import styles from '../styles/TweetPreview.module.scss'

const randNum = (index) => {
    return index * Math.floor(Math.random() * 1000)
}

export const TweetPreview = ({ data, index }) => (
    <div key={randNum(index)} className={styles.parent}>
        <p className={styles.title} key={randNum(index)}>{data.title}</p>
        <img src={data.image} alt="" className={styles.cover} />
    </div>
)