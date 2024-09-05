import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Script from 'next/script'
import GoogleTranslate from '../../components/GoogleTranslate';
import SocialSharing from '../../components/SocialSharing';
import SearchComponent from '../../components/SearchComponent';
import { useMediaQuery } from 'react-responsive';

const page9 = ({ items }) => {
  const [latest, setLatest] = useState(items || []); // Ensure items is defined, fallback to an empty array if undefined
  const router = useRouter();
  const currentPage = parseInt(router.pathname.replace('/home/page', '')) || 1;
  const totalPages = 20; // Adjust this based on the total number of pages

  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

  // State to track when the component has mounted
  const [mounted, setMounted] = useState(false);

  // Media query definitions
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // Ensure this runs after the component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until component has mounted
  if (!mounted) {
    return null;
  }

  const handlePageSelect = (page) => {
    setCurrentPage(page);
  };


  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '123Movies - Explore. Discover. Download.',
      url: 'https://123movies-free.vercel.app/',
      image: ['https://123movies-free.vercel.app/favicon.ico'],
      logo: {
        '@type': 'ImageObject',
        url: 'https://123movies-free.vercel.app/logo.png',
        width: 280,
        height: 80
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://123movies-free.vercel.app/',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://123movies-free.vercel.app/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ])
  
  const softwareSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://123movies-free.vercel.app/page9',
    headline: 'Main Section 9 | 123Movies™',
    url: 'https://123movies-free.vercel.app/page9',
    description:
      '123Movies - Stream HD movies and TV series for free on 123Movies Online. Explore, stream, and download full-length movies and shows in HD quality without registration.',
    image: 'https://123movies-free.vercel.app/og_image.jpg',
    author: {
      '@type': 'Person',
      name: 'DrTrailer',
      url: 'https://gravatar.com/drtrailer2022'
    },
    publisher: {
      '@type': 'Organization',
      name: '123Movies - Explore. Discover. Download.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://123movies-free.vercel.app/og_image.jpg'
      }
    },
    datePublished: '2024-06-02',
    dateModified: '2024-06-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://123movies-free.vercel.app/page9'
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Action Platform',
      value: ['movies Web Platform', 'iOS Platform', 'Android Platform']
    }
  })
  
  const breadcrumbSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://123movies-free.vercel.app/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'movies',
        item: 'https://123movies-free.vercel.app/page9'
      }
    ]
  })

  return (
    <div className='w-full' style={{ backgroundColor: '#000' }}>
      <Head>
        <title> Main Section 9 | 123Movies™</title>
        <link rel='canonical' href='https://123movies-free.vercel.app/page9' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content=' Main Section 9 | 123Movies™' />
        <meta
          property='og:description'
          content='123Movies™ - Stream HD movies and TV series for free on 123Movies Online. Explore, stream, and download full-length movies and shows in HD quality without registration.'
        />

        <meta property='og:url' content='https://123movies-free.vercel.app/page9' />

        <meta property='og:site_name' content='123Movies™' />
        <meta property='og:type' content='article' />
        <meta
          property=' og:image:alt'
          content='https://123movies-free.vercel.app/og_image.jpg'
        />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='123Movies™' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
      <meta
          name='keywords'
          content='123movies,123moviesHUB,123moviesFREE,123movies-hd,123moviesx,123movies-org,123movies-com,123movies official,123movies,123movies free,free movies,movies online,watch movies online,watch movies free,123movies, gomovies,putlocker,putlockers,soap2day'
        />
        <meta
          property='og:image'
          content='https://123movies-free.vercel.app/og_image.jpg'
        />
        <meta property='og:image:width' content='1280px' />
        <meta property='og:image:height' content='720px' />
        <meta property='og:image:type' content='image/webp' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
        <meta
          name='google-site-verification'
          content='o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU'
        />
        <meta
          name='facebook-domain-verification'
          content='du918bycikmo1jw78wcl9ih6ziphd7'
        />
        <meta
          name='dailymotion-domain-verification'
          content='dmv6sg06w9r5eji88'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: softwareSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
      </Head>
      <SocialSharing />
      <Script src='../../propler/ads.js' defer />
      <Script src='../../propler/ads2.js' defer />
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          fontSize: '35px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '15px',
        }}
      >
        123Movies Main Section.
      </h1>
      <a
        href='https://t.me/watchmovietvshow/'
        target='_blank'
        rel='noopener noreferrer'
        className='telegram-link'
        style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}
      >
        <p style={{ display: 'inline-block' }}>
          For Request or Demand <br /> 
          Movies & TV Series Join Telegram
          <i className='fab fa-telegram telegram-icon'></i>
        </p>
      </a>
      <GoogleTranslate />
      <span className="px-0 bg-clip-text text-sm text-black font-bold mt-2 "  >
        <SearchComponent />
      </span>
      <div className="flex justify-center items-center my-4 gap-4">
      {isDesktop && (
        <div className="flex flex-col justify-center items-center gap-2">
          {/* First row of pages for desktop and laptop devices */}
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/home/page1" passHref>
              <button
                className={`px-4 py-2 border rounded ${
                  currentPage === 1
                    ? 'bg-red-500 text-white font-bold'
                    : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
                }`}
              >
                Page 1
              </button>
            </Link>

            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
              <Link key={page} href={`/home/page${page}`} passHref>
                <button
                  className={`px-4 py-2 border rounded ${
                    currentPage === page
                      ? 'bg-red-500 text-white font-bold'
                      : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
                  }`}
                >
                  PAGE {page}
                </button>
              </Link>
            ))}
          </div>

          {/* Second row for pages 11 and 12 */}
          {/* <div className="flex justify-center gap-2">
            {[11, 12].map((page) => (
              <Link key={page} href={`/home/page${page}`} passHref>
                <button
                  className={`px-4 py-2 border rounded ${
                    currentPage === page
                      ? 'bg-red-500 text-white font-bold'
                      : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
                  }`}
                >
                  PAGE {page}
                </button>
              </Link>
            ))}
          </div> */}
        </div>
      )}

      {isMobile && (
        <div className="flex justify-center items-center my-4 gap-4">
          {/* Previous button for mobile */}
          <Link href={`/home/page${previousPage}`} passHref>
            <button
              className={`px-4 py-2 border rounded ${
                currentPage === 1
                  ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
              }`}
              disabled={currentPage === 1}
            >
              « Previous
            </button>
          </Link>

          {/* Current page display for mobile */}
          <span className="px-4 py-2 border rounded bg-blue-500 text-white font-bold">
            Page {currentPage}
          </span>

          {/* Next button for mobile */}
          <Link href={`/home/page${nextPage}`} passHref>
            <button
              className={`px-4 py-2 border rounded ${
                currentPage === totalPages
                  ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
              }`}
              disabled={currentPage === totalPages}
            >
              Next »
            </button>
          </Link>
        </div>
      )}
    </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {latest.map((item) => {
            // Ensure item.siteurl is defined
            if (!item.siteurl) {
              console.warn(`Missing siteurl for item with id ${item.id}`); // Debugging: log missing siteurl
              return null; // Skip rendering this item
            }

            return (
              <div
                key={item.id}
                className="card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
              >
                <Link href={item.siteurl} passHref>
                  <div>
                    <div className="relative">
                      <div className="absolute top-2 left-2 z-10 badge bg-gradient-to-r from-pink-500 to-amber-500 text-white py-2 px-4 rounded-lg text-center font-bold">
                        {item.badge}
                      </div>
                      <div className="aspect-w-16 aspect-h-9 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1280}
                        height={720}
                        className='w-full h-full rounded-t-lg'
                        quality={90}
                        loading='lazy'
                        style={{
                          borderRadius: '0.5rem',
                          objectFit: 'cover' ,
                           filter:
                            'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
                        }}
                      />
                    </div>
                   
                      <div className='p-4 '>
                      <h2 className='font-bold text-xl text-blue-500 flex flex-col items-center justify-center'>
                        {item.title}
                       </h2>
                      <h3 className='text-gray-700 mb-2'>{item.news1}</h3>
                        <p className='font-bold text-black mb-2 flex flex-col items-center justify-center'> Genre: </p>
                      <p className="font-bold text-black mb-2 flex flex-col items-center justify-center">
                      {item.genre}
                      </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .telegram-link {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(to right, #ff7e5f, #feb47b);
          background-clip: text;
          color: transparent;
          margin-top: 25px;
        }

        .telegram-icon {
          color: #0088cc;
          margin-left: 10px;
          font-size: 2rem;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @media (min-width: 768px) {
          .title {
            font-size: 2rem;
          }

          .highlight {
            font-size: 2rem;
          }

          .telegram-link {
            font-size: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .title {
            font-size: 2.5rem;
          }

          .highlight {
            font-size: 2.5rem;
          }

          .telegram-link {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch('https://123movies-free.vercel.app/moviesp7.json');
    const data = await res.json();

    return {
      props: {
        items: data || [], // Ensure data is an array
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        items: [], // Return an empty array to avoid issues
      },
    };
  }
}

export default page9;