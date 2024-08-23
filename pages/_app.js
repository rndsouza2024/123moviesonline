import '@styles/globals.css';
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from '../components/PageTransition';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import Script from 'next/script';
import { useEffect } from 'react';

function Application({ Component, pageProps }) {
  useEffect(() => {
    const setupWebpushr = () => {
      if (typeof window.webpushr !== 'undefined') {
        window.webpushr('setup', {
          key: 'BIHpgrvLvdxGSRA7cHudMTBdr7EWGon3q4reCUGbDcm5uiM2CkypC83diBbYhTMaD8pY_5G0L817DCPB3UqY2CI',
        });
      }
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.webpushr.com/app.min.js';
    script.async = true;
    script.onload = setupWebpushr;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="center">
      <GoogleAnalytics measurementId="G-MHJ16WWPSB" />
     {/* <Script src='../../propler/ads.js' defer />
     <Script src='../../propler/ads2.js' defer /> */}
      
      <PageTransition>
        <Hamburger />
        <Component {...pageProps} />
        <Footer />
      </PageTransition>
    </div>
  );
}

export default Application;
