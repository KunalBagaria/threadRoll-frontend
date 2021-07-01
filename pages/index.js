import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { Nav } from '../components/Nav'
import { Heading } from '../components/Heading'
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
      <Meta title="Article Reader" description="Read articles, your way" />
      <Nav />
      <div className={styles.mainFlex}>
        <Sidebar active="Home" />
        <div className={styles.mainContent}>
          <Heading text="Read articles, your way" />
          {!isAuthenticated && (
            <LoginButton />
          )}
          {isAuthenticated && (
            <button onClick={() => console.log(user)}>User</button>
          )}
        </div>
      </div>
    </>
  )
}
