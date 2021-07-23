import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { RightSidebar } from '../components/RightSidebar'
import { useRouter } from 'next/router'
import { MobileMenu } from '../components/MobileMenu'
import { Animation } from '../components/Animation'
import { userArticles } from '../components/userArticles'
import Loading from '../components/Animations/Loading.json'
import { TweetPreview } from '../components/TweetPreview'

import Image from 'next/image'
import back from '../images/icons/back.svg'
import styles from '../styles/Home.module.scss'

export default function Article() {
  const { isLoading, loginWithRedirect, user } = useAuth0();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(async () => {
    (async function login() {
      if (!isLoading && !user) {
        await loginWithRedirect();
      }
    })();
    if (user?.sub) {
      const uid = user.sub.split('|').pop()
      const userArts = await userArticles(uid);
      setArticles(userArts);
      setLoading(false)
    }
  }, [isLoading]);

  return (
    <>
      <Meta title="Saved / threadRoll" description="Roll articles into a twitter thread" />
        <div className={styles.mainFlex}>
          <Sidebar active="Saved" />

          <div className={styles.mainContent}>
            <div className={styles.nav}>
              <div className={styles.back} onClick={() => router.back()}>
                <div>
                  <Image src={back}></Image>
                </div>
              </div>
              <h1 className={styles.pageName}>Saved</h1>
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
                {!loading && articles[0] && (
                  articles.map((article, index) => (
                    <TweetPreview data={article} key={index} index={index} saved={articles.map((article) => article.url)} />
                  ))
                )}
              </div>
          </div>

          <RightSidebar />
        </div>
    </>
  )
}
