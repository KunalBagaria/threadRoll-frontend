import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Animation } from '../components/Animation'
import Loading from '../components/Animations/Loading.json'
import { fetchArticles } from '../components/components'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { RightSidebar } from '../components/RightSidebar'
import { useAuth0 } from '@auth0/auth0-react'
import styles from '../styles/Home.module.scss'
import { TweetPreview } from '../components/TweetPreview'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [link, setLink] = useState()
  const [red, setRed] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const {
    user,
    isLoading
  } = useAuth0()

  useEffect(() => {
    fetchArticles(setArticles, setLoading)
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
              {isLoading && (
                <div className={styles.loading}>
                  <div style={{ width: 'calc(40px + 1vw)', height: 'calc(40px + 1vw)' }}>
                    <Animation json={Loading} />
                  </div>
                </div>
              )}
              {!isLoading && (
                <>
                {/* Add the parse option here */}
                <div className={styles.parseChild}>
                  <img className={styles.profilePicture} src={user?.picture ? user.picture : 'https://i.imgur.com/9AMrjnG.jpg'} alt="Profile Picture" />
                  <div className={styles.parseStuff}>
                    <input style={{ color: link ? 'white' : ''}} onChange={(e) => {
                      const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
                      const input = e.target.value;
                      if (regex.test(input)) {
                        setLink(input)
                        setRed(false)
                      } else {
                        setLink("")
                        setRed(true)
                      }
                    }} className={styles.articleInput} placeholder="Enter an article link"/>
                    <div className={styles.smallDivider} style={{ background: red ? 'rgb(255, 0, 0, 0.45)' : ''}}></div>
                    <button onClick={(e) => {
                      e.preventDefault()
                      if (link) {
                        router.push(`article?url=${link}`)
                      }
                    }} className={styles.parseBtn} disabled={link ? false : true}>Parse</button>
                  </div>
                </div>

                </>
              )}
              <div className={styles.divider}></div>
            </div>
            
            <div className={styles.tweetsFlex}>
              {loading && (
                <div className={styles.loading}>
                  <div style={{ width: 'calc(40px + 1vw)', height: 'calc(40px + 1vw)', marginTop: '10vh' }}>
                    <Animation json={Loading} />
                  </div>
                </div>
              )}
              {!loading && articles[0] && (
                articles.map((article, index) => (
                  <TweetPreview data={article} index={index} />
                ))
              )}
            </div>

          </div>
        </div>
        
        {/* Right Sidebar Here */}
        <RightSidebar active="Home" />


      </div>
    </>
  )
}
