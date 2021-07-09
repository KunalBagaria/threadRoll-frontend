import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { RightSidebar } from '../components/RightSidebar'
import styles from '../styles/Home.module.scss'

export default function ArticlePage() {
    const [article, setArticle] = useState({})
    const router = useRouter();
    const url = router.query.url;

    useEffect(() => {
        fetch(`https://ar-backend-production.up.railway.app/extract?url=${url}`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
        })
        .catch((err) => console.error(err))
    }, [])

    return (
        <>
            <Meta title="Article / readRoll" description="Read articles, your way" />
            <div className={styles.mainFlex}>
                <Sidebar active="Article" />
                <div className={styles.mainContent}>

                </div>
                <RightSidebar />
            </div>
        </>
    )
}
