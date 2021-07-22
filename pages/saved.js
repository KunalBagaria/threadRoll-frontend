import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import styles from '../styles/Home.module.scss'

export default function Article() {
  return (
    <>
        <Meta title="Saved / threadRoll" description="Roll articles into a twitter thread" />
        <div className={styles.mainFlex}>
          <Sidebar active="Saved" />
        </div>
    </>
  )
}
