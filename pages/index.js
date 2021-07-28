import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Animation } from '../components/Animation'
import { fetchArticles } from '../components/components'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { RightSidebar } from '../components/RightSidebar'
import { useAuth0 } from '@auth0/auth0-react'
import { TweetPreview } from '../components/TweetPreview'
import { MobileMenu } from '../components/MobileMenu'
import { userArticles } from '../components/userArticles'
import back from '../images/icons/back.svg'
import Loading from '../components/Animations/Loading.json'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [link, setLink] = useState()
  const [red, setRed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [savedArticles, setSavedArticles] = useState([])
  const router = useRouter()

  const {
    user,
    isLoading
  } = useAuth0()

  useEffect(async () => {
    fetchArticles(setArticles, setLoading, 'articles')
    if (user?.sub) {
      const uid = user.sub.split('|').pop()
      let userarts = await userArticles(uid)
      userarts = userarts.map((item) => item.url)
      setSavedArticles(userarts)
    }
  }, [fetchArticles, user])

  return (
    <>
      <Meta title="Home / threadRoll" description="Roll articles into a twitter thread" />
      <div className={styles.mainFlex}>

        <Sidebar active="Home" />

        <div className={styles.overFlowY}>

        <div className={styles.mainContent}>
          <div className={styles.nav}>
            <h1 className={styles.pageName}>Home</h1>
            <MobileMenu />
          </div>


            <div className={styles.parseParent}>
              {isLoading && (
                <div className={styles.loading}>
                  <div style={{ width: 'calc(40px + 1vw)', height: 'calc(40px + 1vw)', marginTop: '5%' }}>
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
                    <input style={{ color: link ? 'white' : 'inherit'}} onChange={(e) => {
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
                  <TweetPreview data={article} key={index} index={index} saved={savedArticles} />
                ))
              )}
            </div>

          </div>
        
        {/* Right Sidebar Here */}
        <RightSidebar active="Home" />
        </div>


      </div>
    </>
  )
}
