import Head from 'next/head'

export const Meta = ({ title, arTitle, description, image }) => (
    <>
        <Head>

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="description" content={description}></meta>

            <meta property="og:title" content={arTitle ? arTitle : title} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" />
            <title>{arTitle ? arTitle : title}</title>

            {/* Twitter */}
            <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

            {/* Open Graph */}
            <meta property="og:url" content={'https://readroll.app'} key="ogurl" />
            <meta property="og:image" content={image} key="ogimage" />
            <meta property="og:site_name" content={'readRoll'} key="ogsitename" />
            <meta property="og:title" content={arTitle ? arTitle : title} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" />

            <link rel="icon" href="../favicon.ico" />
        </Head>
    </>
)