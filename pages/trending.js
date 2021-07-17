import { useState, useEffect } from 'react'
import { fetchArticles } from '../components/components'
import { TweetPreview } from '../components/TweetPreview'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { Animation } from '../components/Animation'
import Loading from '../components/Animations/Loading.json'
import { RightSidebar } from '../components/RightSidebar'
import styles from '../styles/Home.module.scss'

export default function Article() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles(setArticles, setLoading, 'trending')
  }, [fetchArticles])


  return (
    <>
        <Meta title="Trending / readRoll" description="Read articles, your way" />
        <div className={styles.mainFlex}>
          <Sidebar active="Trending" />
          <div className={styles.mainContent}>
            <div className={styles.nav}>
              <h1 className={styles.pageName}>Trending</h1>
            </div>

            {loading && (
              <div className={styles.loading}>
              <div style={{ width: 'calc(40px + 1vw)', height: 'calc(40px + 1vw)', marginTop: '10vh' }}>
                  <Animation json={Loading} />
              </div>
              </div>
            )}

            <div className={styles.overFlowY}>
              <div className={styles.tweetsFlex}>
                {!loading && articles[0] && (
                  articles.map((article, index) => (
                    <TweetPreview data={article} key={index} index={index} />
                  ))
                )}
              </div>
            </div>
          </div>
          
          <RightSidebar />

        </div>
    </>
  )
}