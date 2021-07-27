import { sidebarLinks } from './SidebarLinks'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'
import { switchTheme } from '../components/components'
import { useRouter } from 'next/router'
import ClickAwayListener from 'react-click-away-listener';
import Image from 'next/image'
import logo from '../images/logo.svg'
import more from '../images/icons/more.svg'
import display from '../images/icons/display.svg'
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

    const router = useRouter();
    const [popup, setPopup] = useState(false)
    const [theme, setTheme] = useState('')

    useEffect(() => {
        setTheme(localStorage.getItem('theme') || '#15202b')
    }, [])

    const changeTheme = (e) => {
        e.stopPropagation()
        setPopup(false)
        switchTheme(localStorage)
        router.reload(window.location.pathname)
    }

    return (
    <>
        <div className={styles.parent}>
            <Link href="/">
                <div className={homeCss.logo}>
                    <Image src={logo} alt="threadRoll Logo" />
                </div>
            </Link>
            
            {sidebarLinks.map((link, index) => (
                <Link key={index} href={link.name === 'Home' ? '/' : `/${link.name.toLowerCase()}`}>
                    <div className={styles.button}>
                        <div className={styles.icon}>
                            <Image src={link.icon} alt={`${link.name} Icon`} className={link.name === active ? styles.activeIcon : ''} />
                        </div>
                        <p className={styles.linkName} style={{ color: link.name === active ? 'rgb(29, 161, 242)' : '' }}>{link.name}</p>
                    </div>
                </Link>
            ))}
            
            <div className={styles.button} onClick={() => setPopup(true)}>
                <div className={styles.icon}>
                    <Image src={more} alt={`More Icon`} />
                </div>
                <p className={styles.linkName}>{'More'}</p>
            </div>


            {popup && (
                <div className={styles.popup} onClick={(e) => changeTheme(e)} style={{ background: theme }}>
                    <ClickAwayListener onClickAway={() => setPopup(false)}>
                        <div className={styles.popupChild}>
                            <div style={{ marginLeft: 'calc(7px + 0.7vw)', width: 'calc(10px + 1vw)' }}>
                                <Image src={display} alt="Display Icon" />
                            </div>
                            <p>Switch Theme</p>
                        </div>
                    </ClickAwayListener>
                </div>
            )}

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