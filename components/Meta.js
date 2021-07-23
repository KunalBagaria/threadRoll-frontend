import Head from 'next/head'

export const Meta = ({ title, arTitle, description, image }) => (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta charSet="utf-8"></meta>
            <meta name="description" content={description}></meta>

            <link rel="apple-touch-icon" href="https://i.imgur.com/O6DPyTR.png"></link>

            {/* Twitter */}
            <meta name="twitter:card" content="summary" key="twcard" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://threadroll.app/" />
            <meta property="twitter:title" content={arTitle ? arTitle : title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="https://i.imgur.com/O6DPyTR.png" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={'https://threadroll.app'} key="ogurl" />
            <meta property="og:image" content={image ? image : 'https://i.imgur.com/O6DPyTR.png'} key="ogimage" />
            <meta property="og:site_name" content={'threadRoll'} key="ogsitename" />
            <meta property="og:title" content={arTitle ? arTitle : title} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" /> 

            <link rel="icon" href="../favicon.ico" />
        </Head>
    </>
)