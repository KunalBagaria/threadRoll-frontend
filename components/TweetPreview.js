import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import link from '../images/icons/tweet/link.svg'
import Image from 'next/image'
import verified from '../images/icons/verified.svg'
import styles from '../styles/TweetPreview.module.scss'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { useRouter } from 'next/router'
import reply from '../images/icons/tweet/reply.svg'
import likeIcon from '../images/icons/tweet/like.svg'
import retweet from '../images/icons/tweet/retweet.svg'
import share from '../images/icons/tweet/share.svg'
import liked from '../images/icons/tweet/liked.svg'
import ClickAwayListener from 'react-click-away-listener';

export const TweetPreview = ({ data, index, saved }) => {
    const router = useRouter();
    const [like, setLike] = useState(saved.includes(data.url) ? liked : likeIcon);
    const [sharePopup, setShare] = useState(null);
    const { user, loginWithRedirect } = useAuth0()

    let icons = [reply, retweet, like, share];

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')

    const handleRetweetClick = (e) => {
        e.preventDefault()
        router.push(`https://twitter.com/intent/tweet?url=https%3A%2F%2Fthreadroll.app/article?url=${data.url}&via=rollthread&text=${data.title}`)
    }

    useEffect(() => {
        if (saved !== null) {
            if (saved.includes(data.url)) {
                setLike(liked)
            }
        }
    }, [saved])


    const handleIconClick = (e, i) => {
        e.stopPropagation()
        if (i === 2 && user?.sub && saved && !saved.includes(data.url)) {
            const userId = user.sub.split('|').pop()
            setLike(liked)
            fetch(`https://ar-backend-production.up.railway.app/save?user=${userId}&_id=${data._id}`)
                .catch((err) => console.error(err))
            // Save the article to the user's profile
        } else if (i === 2 && !user?.sub) {
            loginWithRedirect()
        } else if (i === 3) {
            setShare(true)
        } else if (i === 1) {
            handleRetweetClick(e)
        }
    }

    const isValidDate = (d) => {
        return d instanceof Date && !isNaN(d);
    }

    const classNames = [
        {
            class: styles.iconParentNoHover
        },
        {
            class: styles.reIcon
        },
        {
            class: saved.includes(data.url) || like === liked ? styles.iconParentNoHover : styles.likeIcon
        },
        {
            class: styles.shareIcon
        }
    ]

    const handleShareClick = (e) => {
        e.stopPropagation()
        navigator.clipboard.writeText(`https://threadroll.app/article?url=${data.url}`)
        setShare(false);
    }

    const date = isValidDate(new Date(data.published)) ? timeAgo.format(new Date(data.published), 'twitter') : null

    return (
        <div className={styles.parent} onClick={() => router.push(`article?url=${data.url}`)}>
            <img key={index} src={`https://i.pravatar.cc/150?u=${data._id}`} alt="Profile Picture" className={styles.profile}></img>
            <div className={styles.content}>
                <div className={styles.publishing}>
                    <p className={styles.author}>{data.author ? data.author : 'Unknown'}</p>
                    {data.author && (
                        <div className={styles.verified}>
                            <Image src={verified}></Image>
                        </div>
                    )}
                    <p className={styles.source}>@{data.source ? data.source.toLowerCase().replace(/\s/g, "")  : 'Unknown'}</p>
                    <p className={styles.date}>• {date ? date : 'Unknown'}</p>
                    
                </div>
                <p className={styles.title}>{data.title}</p>
                <img src={data.image} alt="" className={styles.cover} />

                <div className={styles.buttons}>
                    {icons.map((icon, index) => (
                        <div onClick={(e) => handleIconClick(e, index)} key={index} className={classNames[index]['class']}>
                            <div className={styles.icon}>
                                <Image src={icon}></Image>
                            </div>
                        </div>
                    ))}
                    {sharePopup && (
                        <div className={styles.sharePopup} key={index} onClick={(e) => handleShareClick(e)} style={{ background: localStorage.getItem('theme') || '#15202b'}}>
                            <ClickAwayListener onClickAway={() => setShare(false)}>
                            <div className={styles.sharePopupChild}>
                                <div style={{ marginLeft: 'calc(7px + 0.7vw)', width: 'calc(10px + 1vw)' }}>
                                    <Image src={link} alt="Link Icon" />
                                </div>
                                <p>Copy link</p>
                            </div>
                            </ClickAwayListener>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}