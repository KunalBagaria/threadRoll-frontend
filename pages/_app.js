import '../styles/globals.scss'
import { useState, useEffect } from 'react'
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from "styled-components";
import { darkTheme, darkBlueTheme, GlobalStyles } from '../components/ThemeConfig';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState("")
  
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || '#15202b')
  }, [])

  return (
    <>
      <Auth0Provider
        domain={'readroll.us.auth0.com'}
        clientId={'viosHeutTbCFxVHBFEW50IVWasO00JRc'}
        redirectUri={'https://threadroll.app'}>
            <ThemeProvider theme={theme == 'black' ? darkTheme : darkBlueTheme}>
              <GlobalStyles />
              <Component {...pageProps} />
            </ThemeProvider>
      </Auth0Provider>
    </>
  )
}

export default MyApp
