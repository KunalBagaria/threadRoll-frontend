import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { useAuth0 } from "@auth0/auth0-react";
import styles from '../styles/Home.module.scss'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default function Home() {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  return (
    <>
      <Meta title="Home / readRoll" description="Read articles, your way" />
      <div className={styles.mainFlex}>
        <Sidebar active="Home" />
        <div className={styles.mainContent}>
          {/* {!isAuthenticated && (
            <LoginButton />
          )}
          {isAuthenticated && (
            <button onClick={() => console.log(user)}>User</button>
          )} */}
        </div>
      </div>
    </>
  )
}
