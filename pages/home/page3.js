import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import latestData from '../../public/latest.json'
import moviesData from '../../public/movies.json'
import { useRouter } from 'next/router'
import GoogleTranslate from '../../components/GoogleTranslate'
import SocialSharing from '../../components/SocialSharing'
import SearchComponent from '../../components/SearchComponent'
import Head from 'next/head'
import Script from 'next/script'

const uwatchfreeSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '123Moviesonline - Explore. Discover. Download.',
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

const softwareSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://123moviesonline.vercel.app/page3',
  headline: 'movies Section | 123Moviesonline™',
  url: 'https://123moviesonline.vercel.app/page3',
  description:
    '123Moviesonline - Stream HD movies and TV series for free on 123Movies Online. Explore, stream, and download full-length movies and shows in HD quality without registration.',
  image: 'https://123moviesonline.vercel.app/og_image.jpg',
  author: {
    '@type': 'Person',
    name: 'DrTrailer',
    url: 'https://gravatar.com/drtrailer2022'
  },
  publisher: {
    '@type': 'Organization',
    name: '123Moviesonline - Explore. Discover. Download.',
    logo: {
      '@type': 'ImageObject',
      url: 'https://123moviesonline.vercel.app/og_image.jpg'
    }
  },
  datePublished: '2024-06-02',
  dateModified: '2024-06-02',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://123moviesonline.vercel.app/page3'
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
      name: 'Windows',
      item: 'https://123moviesonline.vercel.app/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'movies',
      item: 'https://123moviesonline.vercel.app/page3'
    }
  ]
})

const page3 = ({ items }) => {
  const [latest, setLatest] = useState(latestData)

  const router = useRouter() // Initialize the router
  const sections = [
    // { title: 'Latest Trailer', items: trailers },
    { title: 'Main Section.', items: items }
    // { title: 'Latest TV Series.', items: tvshows }
    // { title: 'Adult Content.', items: adults }
  ]

  const [currentPage, setCurrentPage] = useState(1)

  const handlePageSelect = page => {
    setCurrentPage(page)
  }

  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '123Moviesonline - Explore. Discover. Download.',
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
  
  const softwareSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://123moviesonline.vercel.app/page3',
    headline: 'movies Section | 123Moviesonline™',
    url: 'https://123moviesonline.vercel.app/page3',
    description:
      '123Moviesonline - Stream HD movies and TV series for free on 123Movies Online. Explore, stream, and download full-length movies and shows in HD quality without registration.',
    image: 'https://123moviesonline.vercel.app/og_image.jpg',
    author: {
      '@type': 'Person',
      name: 'DrTrailer',
      url: 'https://gravatar.com/drtrailer2022'
    },
    publisher: {
      '@type': 'Organization',
      name: '123Moviesonline - Explore. Discover. Download.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://123moviesonline.vercel.app/og_image.jpg'
      }
    },
    datePublished: '2024-06-02',
    dateModified: '2024-06-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://123moviesonline.vercel.app/page3'
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
        item: 'https://123moviesonline.vercel.app/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'movies',
        item: 'https://123moviesonline.vercel.app/page3'
      }
    ]
  })
  
  return (
    // <div className='w-full' style={{ backgroundColor: '#D3D3D3' }}>
    <div className='w-full' style={{ backgroundColor: '#000' }}>
      <Head>
        <title> Main Section 3 | 123Moviesonline™</title>
        <link rel='canonical' href='https://123moviesonline.vercel.app/page3' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content=' Main Section 3 | 123Moviesonline™' />
        <meta
          property='og:description'
          content='123Moviesonline™ - Stream HD movies and TV series for free on 123Movies Online. Explore, stream, and download full-length movies and shows in HD quality without registration.'
        />

        <meta property='og:url' content='https://123moviesonline.vercel.app/page3' />

        <meta property='og:site_name' content='123Moviesonline™' />
        <meta property='og:type' content='article' />
        <meta
          property=' og:image:alt'
          content='https://123moviesonline.vercel.app/og_image.jpg'
        />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='123Moviesonline™' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <meta
          name='keywords'
          content='123movies, 123moviesHUB, 123moviesFREE, 123movies-hd, 123moviesx, 123movies-org, 123movies-com, 123movies official, 123movies, 123movies free, free movies, movies online, watch movies online, watch movies free, 123movies, gomovies, putlocker, putlockers, soap2day'
        />
        <meta
          property='og:image'
          content='https://123moviesonline.vercel.app/og_image.jpg'
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
      {/* <Script src='../../propler/ads.js' defer />
      <Script src='../../propler/ads2.js' defer /> */}
   
      <h1
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6  shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          fontSize: '35px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '15px'
        }}
      >
        123Moviesonline Main Section.
      </h1>
      <GoogleTranslate />
      <span className='px-0 bg-clip-text text-sm text-black font-bold mt-2'>
        <SearchComponent />
      </span>
      <div className="flex flex-wrap justify-center my-4 gap-2">
      {/* TV Show movies button */}
      <Link href="/home" passHref>
        <button
          className={`px-4 py-2 border rounded ${
            router.pathname === '/home'
              ? 'bg-red-500 text-white font-bold'
              : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
          }`}
        >
          Page 1
        </button>
      </Link>

      {/* Page 2, Page 3, Page 4 buttons */}
      {[2, 3, 4, 5, 6, 7, 8, ].map((page) => (
        <Link key={page} href={`/home/page${page}`} passHref>
          <button
            className={`px-4 py-2 border rounded ${
              router.pathname === `/home/page${page}`
                ? 'bg-red-500 text-white font-bold'
                : 'bg-gray-200 hover:bg-green-500 text-black font-bold'
            }`}
          >
            PAGE {page}
          </button>
        </Link>
      ))}
    </div>

      <div className='container mx-auto px-4 py-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {items.map(item => (
            <div
              key={item.id}
              className='card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300'
            >
               <Link href={item.siteurl}>
                <div>
                  <div className='relative'>
                    {/* Badge in front of the image */}
                    <div className='absolute top-2 left-2 z-10 badge bg-gradient-to-r from-pink-500 to-amber-500 text-white py-2 px-4 rounded-lg text-center font-bold'>
                      {item.badge}
                    </div>
                    <div className='w-full h-60 md:h-80 lg:h-96'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1280}
                        height={720}
                        className='w-full h-full rounded-t-lg'
                        quality={90}
                        loading='lazy'
                        style={{
                          objectFit: 'cover',
                          borderRadius: '0.5rem',
                          filter:
                            'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
                        }}
                      />
                    </div>
                    <div className='p-4'>
                      <h2 className='text-gray-500 mb-4'>
                        <span className='font-bold text-blue-500'>
                          {item.title}
                        </span>
                      </h2>
                      <p className='text-gray-700 mb-2'>{item.news1}</p>
                      <p className='font-bold text-black mb-2 flex flex-col items-center justify-center'> Genre: </p>
                      <p className="font-bold text-black mb-2 flex flex-col items-center justify-center">
                      {item.genre}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps () {
  try {
    const res = await fetch('https://123moviesonline.vercel.app/moviesp2.json')
    const data = await res.json()

    return {
      props: {
        items: data
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        items: []
      }
    }
  }
}

export default page3
