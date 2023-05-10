import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Router } from 'next/router';
import { useEffect, useState } from 'react'
import Loader from '../components/Loader';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, SetLoading] = useState(false);




  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      SetLoading(true);
    });

    Router.events.on('routeChangeComplete', (url) => {
      SetLoading(false);
    });
  }, []);

  return <>
    {loading && <Loader />}
    <Component {...pageProps} />
  </>
}