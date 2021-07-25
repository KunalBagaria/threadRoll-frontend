import { useState, useEffect } from 'react'
import { fetchArticles } from '../components/components'
import { userArticles } from '../components/userArticles'
import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'
import back from '../images/icons/back.svg'
import { TweetPreview } from '../components/TweetPreview'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { Animation } from '../components/Animation'
import Loading from '../components/Animations/Loading.json'
import { RightSidebar } from '../components/RightSidebar'
import styles from '../styles/Home.module.scss'
import { MobileMenu } from '../components/MobileMenu'
import Image from 'next/image'

export default function Article() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [savedArticles, setSavedArticles] = useState([])
  const { user } = useAuth0()
  const router = useRouter()

  useEffect(async () => {
    fetchArticles(setArticles, setLoading, 'trending')
    if (user?.sub) {
      const uid = user.sub.split('|').pop()
      let userarts = await userArticles(uid)
      userarts = userarts.map((item) => item.url)
      setSavedArticles(userarts)
    }
  }, [fetchArticles, user])


  return (
    <>
        <Meta title="Trending / readRoll" description="Roll articles into a twitter thread" />
        <div className={styles.mainFlex}>
          <Sidebar active="Trending" />
          <div className={styles.mainContent}>
            <div className={styles.nav}>
              <div className={styles.back} onClick={() => router.back()}>
                <div>
                  <Image src={back}></Image>
                </div>
              </div>
              <h1 className={styles.pageName}>Trending</h1>
              <MobileMenu />
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
                    <TweetPreview data={article} key={index} index={index} saved={savedArticles} />
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