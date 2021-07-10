import { useEffect, useState } from 'react';
import { AvatarGenerator } from 'random-avatar-generator';
import Image from 'next/image'
import verified from '../images/icons/verified.svg'
import styles from '../styles/TweetPreview.module.scss'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { useRouter } from 'next/router'
import reply from '../images/icons/tweet/reply.svg'
import like from '../images/icons/tweet/like.svg'
import retweet from '../images/icons/tweet/retweet.svg'
import share from '../images/icons/tweet/share.svg'

const randNum = (index) => {
    return index * Math.floor(Math.random() * 1000)
}

export const TweetPreview = ({ data, index }) => {
    const [date, setDate] = useState()
    const router = useRouter();
    const icons = [reply, retweet, like, share];
    const generator = new AvatarGenerator();

    useEffect(() => {
        TimeAgo.addLocale(en)
        const timeAgo = new TimeAgo('en-US')
        if (data.published) {
            setDate(timeAgo.format(new Date(data.published), 'twitter'))
        }
    }, [])

    return (
        <div key={randNum(index)} className={styles.parent} onClick={() => router.push(`article?url=${data.url}`)}>
            <img src={generator.generateRandomAvatar()} alt="Profile Picture" className={styles.profile}></img>
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
                <p className={styles.title} key={randNum(index)}>{data.title}</p>
                <img key={randNum(index)} src={data.image} alt="" className={styles.cover} />
                <div className={styles.buttons}>
                    {icons.map((icon, index) => (
                        <div className={(index === 0 || index === 1) ? styles.iconParentNoHover : styles.iconParent}>
                            <div className={styles.icon} key={index}>
                                <Image src={icon}></Image>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}