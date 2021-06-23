import Image from 'next/image'
import Link from 'next/link'
import home from '../images/icons/home.svg'
import article from '../images/icons/article.svg'
import saved from '../images/icons/saved.svg'
import trending from '../images/icons/trending.svg'
import styles from '../styles/Sidebar.module.scss'

const sidebarLinks = [
    {
        name: 'Home',
        icon: home
    },
    {
        name: 'Article',
        icon: article,
    },
    {
        name: 'Saved',
        icon: saved,
    },
    {
        name: 'Trending',
        icon: trending
    }
]

export const Sidebar = ({ active }) => (
    <>
        <div className={styles.parent}>
            {sidebarLinks.map((link) => (
                <Link href={link.name === 'Home' ? '/' : `/${link.name.toLowerCase()}`}>
                    <div className={styles.button} style={{ background: link.name === active ? 'rgb(73,72,127, 0.15)' : ''}}>
                        <div className={styles.icon}>
                            <Image src={link.icon} alt={`${link.name} Icon`} />
                        </div>
                        <p className={styles.linkName}>{link.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    </>
)