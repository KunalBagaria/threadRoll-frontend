import { useEffect, useState } from 'react'
import { fetchArticles } from '../components/components'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetchArticles(setArticles)
  }, [fetchArticles])
  return (
    <>
      <Meta title="Home / readRoll" description="Read articles in a Twitter thread" />
      <div className={styles.mainFlex}>

        <Sidebar active="Home" />

        <div className={styles.mainContent}>
          <div className={styles.nav}>
            <h1 className={styles.pageName}>Home</h1>
          </div>

          <div className={styles.overFlowY}>

            <div className={styles.parseParent}>
              {/* Add the parse option here */}
              <div className={styles.divider}>
              </div>
            </div>

            {articles[0] && (
              // Add tweet Design in this
              articles.map((article, index) => (
                <p style={{ color: 'white' }}>{article.title}</p>
              ))
            )}

          </div>
        </div>
        
        {/* Right Sidebar Here */}

      </div>
    </>
  )
}
