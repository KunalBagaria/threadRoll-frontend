import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import styles from '../styles/Components.module.scss'
import Image from 'next/image'
import menu from '../images/icons/menu.svg'
import Modal from 'react-modal';

let customStyles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        borderRadius: 'calc(10px + 1vw)',
        border: 'none',
        height: '250px',
        padding: '0px',
        overflow: 'hidden'
    }
};

const links = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Article',
        link: '/article',
    },
    {
        name: 'Saved',
        link: '/saved',
    },
    {
        name: 'Trending',
        link: '/trending',
    }
]


Modal.setAppElement('#__next');

export const MobileMenu = () => {
    const [modal, setModal] = useState(false)
    const router = useRouter()

    useEffect(() => {
        customStyles['content']['background'] = localStorage?.getItem('theme') || '#15202b'
    }, [])

    return (
        <>
            <div className={styles.menu} onClick={() => modal ? setModal(false) : setModal(true)}>
                <div className={styles.menuBtn}>
                    <Image src={menu}></Image>
                </div>
            </div>

            <div onClick={() => setModal(false)}>
                <Modal isOpen={modal} style={customStyles}>
                    <div onClick={(e) => e.stopPropagation()}>
                        {links.map((link, i) => (
                            <div key={i} className={styles.linkDiv} onClick={() => router.push(link.link)}>
                                <p>{link.name}</p>
                            </div>
                        ))}
                    </div>
                </Modal>
            </div>
        </>
    )
}