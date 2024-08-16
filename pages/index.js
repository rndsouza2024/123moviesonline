import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/123movies.module.css'
import SocialSharing from '../components/SocialSharing'
import SearchComponent from '../components/SearchComponent'
import GoogleTranslate from '../components/GoogleTranslate'
import Head from 'next/head'

const HomePage = ({ movies, tvshow, adults }) => {
  const sections = [
    { title: 'Movies', items: movies },
    { title: 'TV Shows', items: tvshow },
    { title: 'Adults', items: adults }
  ]

  const [activeTab, setActiveTab] = useState(0)
  const pageTitle = '123Movies Online™ - Explore. Stream. Online. '

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
        '@id': 'https://123moviesonline.vercel.app/#website',
        url: 'https://123moviesonline.vercel.app',
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
        '@id': 'https://123moviesonline.vercel.app/#webpage',
        url: 'https://123moviesonline.vercel.app/',
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
            '@id': 'https://123moviesonline.vercel.app/',
            url: 'https://123moviesonline.vercel.app/',
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
            '@id': 'https://123moviesonline.vercel.app/',
            url: 'https://123moviesonline.vercel.app/',
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
            '@id': 'https://123moviesonline.vercel.app/',
            url: 'https://123moviesonline.vercel.app/',
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
    url: 'https://123moviesonline.vercel.app/',
    name: '123Movies Online™ - Explore. Stream. Online.',
    alternateName: [
      '123Movies Online™ - Explorar. Transmitir. En línea.',
      '123Movies Online™ - Explorer. Diffuser. En ligne.',
      '123Movies Online™ - Entdecken. Streamen. Online.',
      '123Movies Online™ - 探索。串流。在线。',
      '123Movies Online™ - 探索する。ストリーミング。オンライン。',
      '123Movies Online™ - 탐험하다. 스트리밍. 온라인.',
      '123Movies Online™ - Explorar. Transmitir. Online.',
      '123Movies Online™ - Esplora. Streaming. Online.',
      '123Movies Online™ - Исследовать. Поток. Онлайн.',
      '123Movies Online™ - استكشاف. بث. اون لاين.'
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
    <div >
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
        <link rel='canonical' href='https://123moviesonline.vercel.app/' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='video.movie' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='123Movies Online™ - Explore. Stream. Online. '
        />
        <meta property='og:url' content='https://123moviesonline.vercel.app/' />
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
          content='4gdbnCGat0T4Ow3Y_RYzPM4vwtsXvhUel5Q-2yULK6k'
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
      </Head>

      <GoogleTranslate />
      <SocialSharing />

      <div
        className={`w-full`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          textAlign: 'center',
          backgroundColor: '#000'
        }}
      >
        <h1
          className='text-black bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300 text-3xl'
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            fontSize: '35px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          123Movies Online™ - Explore. Stream. Online.
        </h1>

        <h2 className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-2xl  font-bold mt-2 items-center justify-center'>
          Discover the Best Movies and TV Shows to Stream on 123Movies Online™
        </h2>
        <p className='text-lg bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent  mt-4'>
          Welcome to <strong>123Movies Online™</strong>, your premier
          destination for streaming the latest and most popular movies and TV
          shows. Our platform offers an extensive collection of entertainment
          options, allowing you to explore a wide variety of genres and discover
          new favorites. Whether you're looking for action-packed thrillers,
          heartwarming dramas, or laugh-out-loud comedies,{' '}
          <strong>123Movies Online™</strong> has something for everyone.
        </p>
        {/* <p className='text-lg bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent mt-4'>
          With a user-friendly interface and high-quality streaming,{' '}
          <strong>123Movies Online™</strong> makes it easy to find and enjoy
          your favorite content. Our library is regularly updated with the
          latest releases, ensuring that you have access to the newest movies
          and TV shows as soon as they are available. Stream online seamlessly
          and enjoy an immersive viewing experience from the comfort of your
          home.
        </p> */}
        {/* <p className='text-lg bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent mt-4'>
          At <strong>123Movies Online™</strong>, we are committed to providing a
          top-notch streaming service that meets all your entertainment needs.
          Join us today and explore the vast world of movies and TV shows
          available at your fingertips. Whether you're a casual viewer or a
          dedicated binge-watcher, <strong>123Movies Online™</strong> is the
          perfect place to stream online and stay entertained.
        </p> */}

        <a
          href='https://t.me/watchmovietvshow/'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold text-2xl mt-2 flex items-center justify-center'
          style={{ marginTop: '25px' }}
        >
          <h3 className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'>
            For Request or Demand Movies & TV Series Join Telegram
            <i className='fab fa-telegram text-blue-600 hover:text-gray-600 ml-2 w-12 h-12 animate-pulse '></i>
          </h3>
        </a>
      </div>
      <div
        className='shadow-lg flex items-center justify-center'
        role='navigation'
      >
        <ul
          id='menu-header-menu'
          className='menu flex flex-wrap justify-center'
          style={{ marginTop: '25px', marginBottom: '25px' }}
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
      <span className='px-0 bg-clip-text text-sm text-black font-bold mt-2'>
        <SearchComponent />
      </span>

      <div className={styles.tabs} style={{ marginTop: '25px' }}>
        {sections.map((section, index) => (
          <button
            key={index}
            className={`${styles.tab} ${
              index === activeTab ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '25px' }}>
        <h2 className={styles.sectionTitle}>{sections[activeTab].title}</h2>
        <div className={styles.movieList}>
          {sections[activeTab].items.length > 0 ? (
            sections[activeTab].items.map(item => (
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
                  />
                  <p className={styles.movieTitle}>
                    {item.title || 'Default Title'}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p>No items to display.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Function to read and parse JSON files
  const readFile = filename => {
    const filePath = path.join(process.cwd(), 'public', filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent)
  }

  // Read and merge all JSON files
  const movies = [
    readFile('movies.json'),
    // readFile('moviesp2.json'),
    // readFile('moviesp3.json'),
    // readFile('moviesp4.json')
  ].flat()

  const tvshow = [
    readFile('tvshow.json'),
    // readFile('tvshowp2.json')
  ].flat()

  const adults = [
    readFile('adult.json'),
    // readFile('adultp2.json')
  ].flat()

  return {
    props: {
      movies,
      tvshow,
      adults
    }
  }
}

export default HomePage