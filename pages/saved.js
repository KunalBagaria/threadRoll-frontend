import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import styles from '../styles/Home.module.scss'

export default function Article() {
  return (
    <>
        <Meta title="Saved / readRoll" description="Read articles, your way" />
        <div className={styles.mainFlex}>
          <Sidebar active="Saved" />
        </div>
    </>
  )
}
