import '../styles/globals.scss'
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Auth0Provider
        domain={'ar-backend.us.auth0.com'}
        clientId={'7m993ObHaMvcVbWFGAAgHhC4L3esQCwP'}
        redirectUri={'https://ar-frontend.vercel.app/'}>
          <Component {...pageProps} />
      </Auth0Provider>
    </>
  ) 
}

export default MyApp
