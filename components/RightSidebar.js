import { useAuth0 } from '@auth0/auth0-react'
import styles from '../styles/RightSidebar.module.scss'

export const RightSidebar = ({ active }) => {
    const {
        isAuthenticated,
        isLoading,
    } = useAuth0();
    return (
    <>
        <div className={styles.parent}>

        </div>
    </>
    )
}