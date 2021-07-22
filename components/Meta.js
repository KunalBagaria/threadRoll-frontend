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
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://threadroll.app/" />
            <meta property="twitter:title" content={arTitle ? arTitle : title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={'https://lh3.googleusercontent.com/fife/AAWUweVv-6Oq9M8k2vGS7zjiSX2fl_QTxPpqOeYrIzBKgXTL5vWWe7CuK8rwHMhKowV21BFwXv0TLzeJlgix_kvBpjpCwFOfHB00gqrtLX4iqSsh9hhDZ0QAvfhRuv84w80IpVnhLcBnsFioDmroNF_-A_U6g2RHRx18GdQgFYvxOgKu7JlWrGLm_6Xs2twukn24XsC-_rpYIsDoJGgdBf8cu5DuGRIey6XszZgWoKF0PHXt7lp5xiP9zRZtFROconGDhCTMFLlVrjL3C5RPQa7WjORZjmMHn8LShTx1i7aGM3HtpkJQGTqQIynaJB6eYntbhqbpjs0zMXjMwCl1oedtK1ArObDHZWZ3tbNO4xFhn6BUeQoh03VMrEtC90QJxVMnr9OGCaVjjS0F5pCFOsUZ9ZNuimpymIEvZ-aBuzxtQmtCciS0txvHKceqPCdhAaXJw8zWxg04RWzlxQd-4onDinoYQOnQHxXmcACDveTSOzTWRGT3fiAMLwZkj6krJtaReVdK80DeG0fJrpPQQTfTjj9DFIhWXv4cFKLohNaKHqK2OMAFdths9ltbkyENaFcPQIJCqYCxQ3Bda9JfJnvx04CXZ0nqD-5h7V8j0BGGkdN2gc_UiF7jOuWeqANyh9OFFwJw2L7x6_U9RHWifXNS4xJDAZmHKexq9kAPBzXilmaJD94gkNVc9TVnQyTWQP_0rsq38AueZ1d2AC2w5HCrgY-pyy2QiDTlCRw=w1440-h677-ft'} />
            
            {/* Open Graph */}
            <meta property="og:site_name" content={'threadRoll'} key="ogsitename" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://threadroll.app/" />
            <meta property="og:title" content={arTitle ? arTitle : title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={'https://lh3.googleusercontent.com/fife/AAWUweVv-6Oq9M8k2vGS7zjiSX2fl_QTxPpqOeYrIzBKgXTL5vWWe7CuK8rwHMhKowV21BFwXv0TLzeJlgix_kvBpjpCwFOfHB00gqrtLX4iqSsh9hhDZ0QAvfhRuv84w80IpVnhLcBnsFioDmroNF_-A_U6g2RHRx18GdQgFYvxOgKu7JlWrGLm_6Xs2twukn24XsC-_rpYIsDoJGgdBf8cu5DuGRIey6XszZgWoKF0PHXt7lp5xiP9zRZtFROconGDhCTMFLlVrjL3C5RPQa7WjORZjmMHn8LShTx1i7aGM3HtpkJQGTqQIynaJB6eYntbhqbpjs0zMXjMwCl1oedtK1ArObDHZWZ3tbNO4xFhn6BUeQoh03VMrEtC90QJxVMnr9OGCaVjjS0F5pCFOsUZ9ZNuimpymIEvZ-aBuzxtQmtCciS0txvHKceqPCdhAaXJw8zWxg04RWzlxQd-4onDinoYQOnQHxXmcACDveTSOzTWRGT3fiAMLwZkj6krJtaReVdK80DeG0fJrpPQQTfTjj9DFIhWXv4cFKLohNaKHqK2OMAFdths9ltbkyENaFcPQIJCqYCxQ3Bda9JfJnvx04CXZ0nqD-5h7V8j0BGGkdN2gc_UiF7jOuWeqANyh9OFFwJw2L7x6_U9RHWifXNS4xJDAZmHKexq9kAPBzXilmaJD94gkNVc9TVnQyTWQP_0rsq38AueZ1d2AC2w5HCrgY-pyy2QiDTlCRw=w1440-h677-ft'} />

            <link rel="icon" href="../favicon.ico" />
        </Head>
    </>
)