import { useEffect, useState } from 'react'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import styles from '../styles/Home.module.scss'

export default function ArticlePage() {
    const [article, setArticle] = useState({})

    useEffect(() => {
        
    })

    return (
        <>
            <Meta title="Article / readRoll" description="Read articles, your way" />
            <div className={styles.mainFlex}>
                <Sidebar active="Article" />
            </div>
        </>
    )
}
