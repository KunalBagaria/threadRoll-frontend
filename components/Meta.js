import Head from 'next/head'

export const Meta = ({ title, description }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="../favicon.ico" />
        </Head>
    </>
)