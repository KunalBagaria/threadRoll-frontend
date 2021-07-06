import { sidebarLinks } from './SidebarLinks'
import { useAuth0 } from '@auth0/auth0-react'
import Image from 'next/image'
import logo from '../images/logo.svg'
import Link from 'next/link'
import styles from '../styles/Sidebar.module.scss'
import homeCss from '../styles/Home.module.scss'

export const Sidebar = ({ active }) => {
    const {
        user,
        isAuthenticated,
        isLoading,
        logout,
        getAccessTokenSilently,
        loginWithRedirect
    } = useAuth0();
    return (
    <>
        <div className={styles.parent}>
            <Link href="/">
                <div className={homeCss.logo}>
                    <Image src={logo} alt="readRoll Logo" />
                </div>
            </Link>
            {sidebarLinks.map((link, index) => (
                <Link key={index} href={link.name === 'Home' ? '/' : `/${link.name.toLowerCase()}`}>
                    <div className={styles.button}>
                        <div className={styles.icon}>
                            <Image src={link.icon} alt={`${link.name} Icon`} className={link.name === active ? styles.activeIcon : ''} />
                        </div>
                        <p className={styles.linkName} style={{ color: link.name === active ? 'rgb(29, 161, 242)' : 'white'}}>{link.name}</p>
                    </div>
                </Link>
            ))}
            {!isAuthenticated && !isLoading && (
                <div className={styles.parseBtn} id="parse-btn" onClick={() => loginWithRedirect()}>
                    <p style={{ color: 'white' }}>Login</p>
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <div className={styles.parseBtn} id="parse-btn" onClick={() => logout()}>
                    <p style={{ color: 'white' }}>Logout</p>
                </div>
            )}
            </div>
    </>
    )
}