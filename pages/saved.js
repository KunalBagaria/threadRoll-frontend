import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { RightSidebar } from '../components/RightSidebar'
import { useRouter } from 'next/router'
import { MobileMenu } from '../components/MobileMenu'

import Image from 'next/image'
import back from '../images/icons/back.svg'
import styles from '../styles/Home.module.scss'

export default function Article() {
  const { isLoading, loginWithRedirect, user } = useAuth0();
  const router = useRouter()

  useEffect(() => {
    (async function login() {
      if (!isLoading && !user) {
        await loginWithRedirect();
      }
    })();
  }, [isLoading]);

  return (
    <>
      <Meta title="Saved / threadRoll" description="Roll articles into a twitter thread" />
        <div className={styles.mainFlex}>
          <Sidebar active="Saved" />

          <div className={styles.mainContent}>
            <div className={styles.nav}>
              <div className={styles.back} onClick={() => router.back()}>
                <div>
                  <Image src={back}></Image>
                </div>
              </div>
              <h1 className={styles.pageName}>Saved</h1>
              <MobileMenu />
            </div>
          </div>

          <RightSidebar />
        </div>
    </>
  )
}
