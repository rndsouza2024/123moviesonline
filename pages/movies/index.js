import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import { useEffect, useState, useRef } from 'react'
import styles from '../../styles/123movies.module.css'
import SearchComponent from '../../components/SearchComponent'
import GoogleTranslate from '../../components/GoogleTranslate'
import SocialSharing from '../../components/SocialSharing'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

const MoviePage = ({ movies }) => {
  const router = useRouter(); // Initialize the router
  const sections = [
    // { title: 'Latest Trailer', items: trailers },
    { title: 'Latest Movies.', items: movies }
    // { title: 'Latest TV Series.', items: tvshows }
    // { title: 'Adult Content.', items: adults }
  ]

  const [currentPage, setCurrentPage] = useState(1)

  const handlePageSelect = (page) => {
    setCurrentPage(page)
  }

  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '123Movies Online™ - Explore. Stream. Online. ',
      url: 'https://123moviesonline.vercel.app/',
      image: ['https://123moviesonline.vercel.app/favicon.ico'],
      logo: {
        '@type': 'ImageObject',
        url: 'https://123moviesonline.vercel.app/logo.png',
        width: 280,
        height: 80
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://123moviesonline.vercel.app/',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://123moviesonline.vercel.app/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ])

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://123moviesonline.vercel.app/author/123moviesonline/',
        name: 'Dr Trailer',
        url: 'https://123moviesonline.vercel.app/author/123moviesonline/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://123moviesonline.vercel.app/#organization',
        name: '123Movies Online™ - Explore. Stream. Online. ',
        url: 'https://123moviesonline.vercel.app'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://123moviesonline.vercel.app/movies/#website',
        url: 'https://123moviesonline.vercel.app/movies',
        name: '123Movies Online™ - Explore. Stream. Online. ',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://123moviesonline.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://123moviesonline.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://123moviesonline.vercel.app/movies/#webpage',
        url: 'https://123moviesonline.vercel.app/movies',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://123moviesonline.vercel.app/author/123moviesonline/',
          name: 'Dr Trailer',
          url: 'https://123moviesonline.vercel.app/author/123moviesonline/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://123moviesonline.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://123moviesonline.vercel.app/movies',
            url: 'https://123moviesonline.vercel.app/movies',
            headline: '123Movies Online™ - Explore. Stream. Online. ',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://123moviesonline.vercel.app/author/123moviesonline/',
              name: 'Dr Trailer',
              url: 'https://123moviesonline.vercel.app/author/123moviesonline/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://123moviesonline.vercel.app/#organization',
              name: '123Movies Online™ - Explore. Stream. Online. ',
              url: 'https://123moviesonline.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://123moviesonline.vercel.app/movies',
            url: 'https://123moviesonline.vercel.app/movies',
            headline: '123Movies Online™ - Explore. Stream. Online. ',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://123moviesonline.vercel.app/author/123moviesonline/',
              name: 'Dr Trailer',
              url: 'https://123moviesonline.vercel.app/author/123moviesonline/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://123moviesonline.vercel.app/#organization',
              name: '123Movies Online™ - Explore. Stream. Online. ',
              url: 'https://123moviesonline.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://123moviesonline.vercel.app/movies',
            url: 'https://123moviesonline.vercel.app/movies',
            headline: '123Movies Online™ - Explore. Stream. Online. ',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://123moviesonline.vercel.app/author/123moviesonline/',
              name: 'Dr Trailer',
              url: 'https://123moviesonline.vercel.app/author/123moviesonline/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            }
          }
        ]
      }
    ]
  })

  const languagesSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: 'https://123moviesonline.vercel.app/movies',
    name: '123Movies Online™ - Movies',
    alternateName: [
      '123Movies Online™ - Películas',
      '123Movies Online™ - Films',
      '123Movies Online™ - Filme',
      '123Movies Online™ - 电影',
      '123Movies Online™ - 映画',
      '123Movies Online™ - 영화',
      '123Movies Online™ - Filmes',
      '123Movies Online™ - Film',
      '123Movies Online™ - Фильмы',
      '123Movies Online™ - أفلام'
    ],
    inLanguage: [
      'es',
      'fr',
      'de',
      'zh-Hans',
      'ja',
      'ko',
      'pt',
      'it',
      'ru',
      'ar'
    ]
  })

  return (
    <div>
      <Head>
        <title>123Movies Online™ - Explore. Stream. Online.</title>
        <link
          rel='sitemap'
          type='application/xml'
          title='Sitemap'
          href='https://123moviesonline.vercel.app/sitemap.xml'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta name='referrer' content='origin' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta
            name='keywords'
            content='123movies, 123moviesHUB, 123moviesFREE, 123movies-hd, 123moviesx, 123movies-org, 123movies-com, 123movies official, 123movies, 123movies free, free movies, movies online, watch movies online, watch movies free, 123movies, gomovies, putlocker, putlockers, soap2day'
          />
        <meta
          name='description'
          content='Stream HD movies and TV series for free on 123Movies Online. Explore, stream, and download full-length movies and shows in HD quality without registration.'
        />
        <link rel='canonical' href='https://123moviesonline.vercel.app/movies' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='video.movie' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='123Movies Online™ - Explore. Stream. Online. '
        />
        <meta property='og:url' content='https://123moviesonline.vercel.app/movies' />
        <meta
          property='og:site_name'
          content='123Movies Online™ - Explore. Stream. Online. '
        />
        <meta
          property='og:image'
          content='https://123moviesonline.vercel.app/og_image.jpg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:type' content='image/jpg' />
        <meta
          name='application-name'
          content='123Movies Online™ - Explore. Stream. Online. '
        />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <link
          rel='sitemap'
          type='application/xml'
          title='Sitemap'
          href='https://123moviesonline.vercel.app/sitemap.xml'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='123Movies Online™ - Explore. Stream. Online.  HD Movies and TV Series Free'
        />
        <meta
          name='twitter:description'
          content='Stream HD movies and TV series for free on 123Movies Online™. Explore, stream, and download full-length movies and shows in HD quality without registration.'
        />
        <meta
          name='twitter:image'
          content='https://123moviesonline.vercel.app/og_image.jpg'
        />
       
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
          content='dm0x7o2qx13altq75'
        />
        <meta name='monetag' content='98a412cb5612b9188cd76b9744304b6c' />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: languagesSchema }}
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
          integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
          crossorigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
   
      <GoogleTranslate />
   
        <h1
          className='text-black bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300 text-3xl'
          style={{
            marginBottom: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            fontSize: '35px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          123Movies Online™ - Movies Section.
        </h1>
      {/* </div> */}
      <SearchComponent />
      <SocialSharing />
      {/* <Script src='../../propler/ads.js' defer /> */}
      <Script src='../../propler/ads2.js' defer />
      <div
        className='shadow-lg flex items-center justify-center'
        role='navigation'
      >
        <ul
          id='menu-header-menu'
          className='menu flex flex-wrap justify-center'
          style={{ marginTop: '25px' }}
        >
          <button className='border border-pink-600 p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-35' className='menu-home active'>
              <a
                href='/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Home<span className='p'></span>
              </a>
            </li>
          </button>

          <button className='border border-pink-600 p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-284913' className='menu-softwarecategories'>
              <a
                href='../trailers/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Trailers<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-pink-600 p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-11610' className='menu-graphicdesign'>
              <a
                href='../movies/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Movies<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-pink-600 p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-84' className='menu-antivirus'>
              <a
                href='../tvshow/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                TV Series <span className='p'></span>
              </a>
            </li>
          </button>

          <button className='border border-pink-600 p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-84' className='menu-antivirus'>
              <a
                href='../adult/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Adult<span className='p'></span>
              </a>
            </li>
          </button>

          <button className='border border-pink-600 p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-194' className='menu-tutorials'>
              <a
                href='../latest/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Latest News<span className='p'></span>
              </a>
            </li>
          </button>
        </ul>
      </div>
      <a
        href='https://t.me/watchmovietvshow/'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold text-2xl mt-2 flex items-center justify-center'
        style={{ marginTop: '25px' }}
      >
        <span className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'>
          For Request or Demand Movies & TV Series Join Telegram
          <i className='fab fa-telegram text-blue-600 hover:text-gray-600 ml-2 w-12 h-12 animate-pulse '></i>
        </span>
      </a>
      <div className="flex flex-wrap justify-center my-4 gap-2">
      {/* TV Show Home button */}
      <Link href="/movies" passHref>
        <button
          className={`px-4 py-2 border rounded ${
            router.pathname === '/movies'
              ? 'bg-red-500 text-white font-bold'
              : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
          }`}
        >
          Page 1
        </button>
      </Link>

      {/* Page 2, Page 3, Page 4 buttons */}
      {[2, 3, 4, ].map((page) => (
        <Link key={page} href={`/movies/page${page}`} passHref>
          <button
            className={`px-4 py-2 border rounded ${
              router.pathname === `/movies/page${page}`
                ? 'bg-red-500 text-white font-bold'
                : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
            }`}
          >
            PAGE {page}
          </button>
        </Link>
      ))}
    </div>

      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            marginTop: '25px'
          }}
        >
          <div className={styles.movieList}>
            {section.items.length > 0 ? (
              section.items.map(item => (
                <Link key={item.id} href={item.siteurl || '/'} passHref>
                  <div className={styles.movieCard}>
                    <Image
                      src={item.image || '/default-image.jpg'}
                      alt={item.title || 'Default Title'}
                      className={styles.movieImage}
                      width={1280}
                      height={720}
                      quality={90}
                      loading='lazy'
                      layout='responsive'
                      style={{
                        width: '100%',
                        height: '200px',
                        boxShadow: '0 0 10px 0 #000',
                        filter:
                          'contrast(1.1) saturate(1.1) brightness(1.1) hue-rotate(0deg)'
                      }}
                    />
                    <h2 className={styles.movieTitle}>
                      {item.title || 'Default Title'}
                    </h2>
                    {/* <div
                      className={styles.movieDetails}
                      style={{
                        width: '100%',
                        height: '500px'
                      }}
                    >
                      <strong
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          textShadow: '1px 1px 1px #000',
                          fontWeight: 'bold',
                          fontSize: '16px'
                        }}
                      >
                        {' '}
                        Genre:{' '}
                      </strong>{' '}
                      <span className={styles.movieDescription}>
                        {item.genre || 'Default Description'}
                      </span>
                      <strong
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          textShadow: '1px 1px 1px #000',
                          fontWeight: 'bold',
                          fontSize: '16px'
                        }}
                      >
                        {' '}
                        Country:{' '}
                      </strong>{' '}
                      <span className={styles.movieDescription}>
                        {item.country || 'Default Description'}
                      </span>
                      <strong
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          textShadow: '1px 1px 1px #000',
                          fontWeight: 'bold',
                          fontSize: '16px'
                        }}
                      >
                        {' '}
                        Language:{' '}
                      </strong>{' '}
                      <span className={styles.movieDescription}>
                        {item.language || 'Default Description'}
                      </span>
                      <strong
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          textShadow: '1px 1px 1px #000',
                          fontWeight: 'bold',
                          fontSize: '16px'
                        }}
                      >
                        {' '}
                        Starring:{' '}
                      </strong>{' '}
                      <span className={styles.movieDescription}>
                        {item.starring || 'Default Description'}
                      </span>
                      <strong
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          textShadow: '1px 1px 1px #000',
                          fontWeight: 'bold',
                          fontSize: '16px'
                        }}
                      >
                        {' '}
                        Synopsis:{' '}
                      </strong>{' '}
                      <span className={styles.movieDescription}>
                        {item.news1 || 'Default Description'}
                      </span>
                    </div> */}
                  </div>
                </Link>
              ))
            ) : (
              <p>No items to display.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps () {
  const readFile = filename => {
    const filePath = path.join(process.cwd(), 'public', filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent)
  }

  const movies = readFile('movies.json')
  // const tvshows = readFile('tvshow.json')
  // const trailers = readFile('trailers.json')
  // const adults = readFile('adult.json')

  return {
    props: {
      movies
      // tvshows
      // trailers,
      // adults
    }
  }
}

export default MoviePage
