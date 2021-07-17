import { useEffect, useState } from 'react'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { RightSidebar } from '../components/RightSidebar'
import { Animation } from '../components/Animation'
import { AvatarGenerator } from 'random-avatar-generator';
import Loading from '../components/Animations/Loading.json'
import styles from '../styles/Home.module.scss'
import { Tweet } from '../components/Tweet'

const splitContent = (content) => {
    console.log(content)
    let contentArr = content.substring(0, 280).split(' ')
    contentArr.pop()
    let string = contentArr.join(' ')
    return string
}


export default function ArticlePage() {
    const [article, setArticle] = useState({})
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const generator = new AvatarGenerator();

    useEffect(async () => {
        const url = window.location.search.split('=')[1] || localStorage.getItem('last')
        if (url) {
            fetch(`https://ar-backend-production.up.railway.app/extract?url=${url}`)
            .then((res) => res.json())
            .then((json) => {

                let content = json.content
                let length = content.length
                let contentArray = []
                let string = ''
                
                // console.log('Before Removal:', content)
                // console.log(string.length)
                // console.log('After Removal:', content)

                // while (string.length !== length) {
                // }
                for (let i=0; i < 10; i++) {
                    string += splitContent(content);
                    console.log(string)
                    content = content.substring(string.length, 0)
                    contentArray.push(content)
                }

                console.log(contentArray)

                setContent(contentArray)
                setArticle(json)
                setLoading(false)
                localStorage.setItem('last', url)
            })
        } else {
            setError(true)
            setLoading(false)
        }
    }, [])

    const avatar = generator.generateRandomAvatar()

    return (
        <>
            <Meta title={"Article / readRoll"} arTitle={article.title} description={article.description ? article.description : 'Read articles, better.'} image={article.image} />
            <div className={styles.mainFlex}>
                <Sidebar active="Article" />
                <div className={styles.mainContent}>
                    <div className={styles.nav}>
                        <h1 className={styles.pageName}>Article</h1>
                    </div>
                    {loading && (
                        <div className={styles.loading}>
                        <div style={{ width: 'calc(40px + 1vw)', height: 'calc(40px + 1vw)', marginTop: '10vh' }}>
                            <Animation json={Loading} />
                        </div>
                        </div>
                    )}

                    <div className={styles.overFlowY}>
                        {error && (
                            <p>There was an error, please try with a valid link.</p>
                        )}

                        {article && (
                            content.map((string, index) => (
                                <Tweet key={index} data={article} content={string} avatar={avatar} index={index} />
                            ))
                        )}
                    </div>
                </div>
                <RightSidebar />
            </div>
        </>
    )
}