import { useEffect, useState } from 'react'
import Image from 'next/image'
import back from '../images/icons/back.svg'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { RightSidebar } from '../components/RightSidebar'
import { Animation } from '../components/Animation'
import { AvatarGenerator } from 'random-avatar-generator';
import Loading from '../components/Animations/Loading.json'
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import { Tweet } from '../components/Tweet'

const chunkArray = (myArray, chunk_size) => {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index + chunk_size);
        myChunk = myChunk.join(' ');
        tempArray.push(myChunk);
    }
    return tempArray;
}

export default function ArticlePage() {
    const [article, setArticle] = useState({})
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const router = useRouter()
    const generator = new AvatarGenerator();

    useEffect(async () => {
        const url = window.location.search.split('=')[1] || localStorage.getItem('last')
        if (url) {
            fetch(`https://ar-backend-production.up.railway.app/extract?url=${url}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                let content = json.content.split(' ')
                let stringArray = chunkArray(content, 60) 
                setContent(stringArray)
                setArticle(json)
                setLoading(false)
                localStorage.setItem('last', url)
            })
            .catch((err) => {
                console.log(err)
                setError(true)
                setLoading(false)
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
                        <div className={styles.back} onClick={() => router.back()}>
                            <div>
                                <Image src={back}></Image>
                            </div>
                        </div>
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
                            <p style={{ textAlign: 'center', marginTop: 'calc(50px + 5vw)', color: 'rgb(255, 255, 255, 0.5)' }}>There was an error, please try with a valid link.</p>
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