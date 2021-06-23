import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../images/logo.svg'

export const Nav = () => (
    <div className={styles.nav}>
        <Link href="/">
        <div className={styles.logo}>
            <Image src={logo} alt="logo" />
        </div>
        </Link>
    </div>
)