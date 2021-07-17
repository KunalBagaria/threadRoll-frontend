import Head from 'next/head'

export const Meta = ({ title, arTitle, description, image }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="title" content={arTitle ? arTitle : title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://readroll.app/" />
            <meta property="og:title" content={arTitle ? arTitle : title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://readroll.app/" />
            <meta property="twitter:title" content={arTitle ? arTitle : title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <link rel="icon" href="../favicon.ico" />
        </Head>
    </>
)