import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import verified from '../images/icons/verified.svg'
import styles from '../styles/TweetPreview.module.scss'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import reply from '../images/icons/tweet/reply.svg'
import like from '../images/icons/tweet/like.svg'
import retweet from '../images/icons/tweet/retweet.svg'
import share from '../images/icons/tweet/share.svg'

export const Tweet = ({ data, content, avatar, index }) => {
    const icons = [reply, retweet, like, share];
    const { user } = useAuth0()
    const router = useRouter()

    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')

    const handleRetweetClick = (e, text) => {
        e.preventDefault()
        router.push(`https://twitter.com/intent/tweet?text=${text}`)
    }

    const handleIconClick = (e, index, text) => {
        e.stopPropagation()
        if (index === 2 && user) {
            console.log(user)
            // Save the article to the user's profile
        } else if (index === 3) {
            console.log('Share!')
            // Share popup
        } else if (index === 1) {
            handleRetweetClick(e, text)
        }
    }

    const isValidDate = (d) => {
        return d instanceof Date && !isNaN(d);
    }

    const date = isValidDate(new Date(data.published)) ? timeAgo.format(new Date(data.published), 'twitter') : null

    

    return (
        <div className={styles.parent}>
            <img src={avatar} alt="Profile Picture" className={styles.profile}></img>
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
                <p className={styles.title} style={{ marginBottom: index === 0 ? '' : '0px'}}>{content}</p>
                {index === 0 && (
                    <img src={data.image} alt="" className={styles.cover} />
                )}
                <div className={styles.buttons}>
                    {icons.map((icon, index) => (
                        <div key={index} className={(index === 0 || index === 2 || index === 3) ? styles.iconParentNoHover : (index === 2 ? styles.likeIcon : (index === 1 ? styles.reIcon : styles.shareIcon))}>
                            <div className={styles.icon}>
                                <Image src={icon} onClick={(e) => handleIconClick(e, index, (index === 1 ? content : ''))}></Image>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}