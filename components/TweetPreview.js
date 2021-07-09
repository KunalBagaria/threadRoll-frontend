import { useEffect, useState } from 'react';
import styles from '../styles/TweetPreview.module.scss'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const randNum = (index) => {
    return index * Math.floor(Math.random() * 1000)
}

export const TweetPreview = ({ data, index }) => {
    const [date, setDate] = useState()
    useEffect(() => {
        TimeAgo.addLocale(en)
        const timeAgo = new TimeAgo('en-US')
        if (data.published) {
            setDate(timeAgo.format(new Date(data.published)))
        }
    }, [])

    return (
        <div key={randNum(index)} className={styles.parent}>
            <img src="https://i.imgur.com/9AMrjnG.jpg" alt="Profile Picture" className={styles.profile}></img>
            <div className={styles.content}>
                <div className={styles.publishing}>
                    <p className={styles.author}>{data.author ? data.author : 'Unknown'}</p>
                    {data.author && (
                        <img className={styles.verified} src={'https://lh3.googleusercontent.com/fife/AAWUweWF-nudwnU6Qp0WmbtgzLT286f0Tl2BESSvJk3EnH4FTRiD40NfROr4XWMN3DANopW9qOqo9pOFlirTnUZo9Updc-5I9qCK4rhHHzDaLxeXEujUO90_Xz04noClUQfOJANqi3EsZ_5lI3BjcZrekmqR21oKhhF0u5aNs9SsAFc8Ansv0IaWuMIjEdcQuz7F1WH8ExuGp6oFeos5i8rP21JKdSm4gqSN8qFy_jO5NggNz5YPrjBqK57d82c5-t2i6MTimU0dIXSP-nYHMh6xDcxiOEN4LIbTeeaZiwoHkat0ihYdXQqizRpx5pVPVURxVUwS1Mjv5KhMyccOJzB3zAkxaOlG4p2CRKUU3IK4dTgQEYSVXWJkg7HM34saJ-4pF5rcZCAzkUoDzS8ppdOFzivFlXTkqmiZD5qu2A8BIrWAAYNksnj5QJf8Xcs220vizfNbPr1HcMbKdbfAsDnCfqKz8KrEXlTw4UVMO3a8Y6H6SvbE4LrKBjS1bZhUxrWsT3yMahyThmn8-lSR5Br1k0yUUUVpOLBnin2fAcbrriIw9Fv7gasBxekCUbBzf48AYI4fTFBOMOUkCJkkXeS6KfMsjCXSa01ZJSh3ah2OiYnpbJroIMOaLeErg2NbhZRyDbwSMApzgBdtpoz5-gDEUU1BVE5ytNQDazu_Ix4DYIkfMoNE49AjUWxAz-285FHS5qNMiiDkwrj3FWWIGPa5EDWbal3ih5B2IGs=w1440-h677-ft'} alt="Verified"></img>
                    )}
                    <p className={styles.source}>@{data.source ? data.source.toLowerCase().replace(/\s/g, "")  : 'Unknown'}</p>
                    <p className={styles.date}>• {date ? date : 'Unknown'}</p>
                </div>
                <p className={styles.title} key={randNum(index)}>{data.title}</p>
                <img onLoad={() => console.log(data)} key={randNum(index)} src={data.image} alt="" className={styles.cover} />
            </div>
        </div>
    )
}