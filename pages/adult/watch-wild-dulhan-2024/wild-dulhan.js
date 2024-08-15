import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import styles from '@styles/iframeStyles.module.css'
import Pagination from '../../../components/Pagination'


import Link from 'next/link'

const AdultDetail = ({ adult }) => {
  const router = useRouter()
  const { id } = router.query
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 0 // Assume there are 3 pages

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const videoPlayerRef = useRef(null)
  const [seconds, setSeconds] = useState(30)
  const [showTimer, setShowTimer] = useState(false)
  const [accordionExpanded, setAccordionExpanded] = useState(false)

  const parseVideoItem = item => {
    if (!item) return { id: '', thumbnail: '' }
    const [id, params] = item.split('?')
    const thumbnail = new URLSearchParams(params).get('thumbnail')
    return { id, thumbnail }
  }

  const movieVideoItem =
    adult.videoadult && adult.videoadult.length > 0
      ? parseVideoItem(adult.videoadult[0])
      : { id: '', thumbnail: '' }

  const movieVideoMoviesItem =
    adult.videomoviesitem && adult.videomoviesitem.length > 0
      ? parseVideoItem(adult.videomoviesitem[0])
      : { id: '', thumbnail: '' }

  const src = `https://short.ink/${
    movieVideoItem.id || movieVideoMoviesItem.id
  }?thumbnail=${movieVideoItem.thumbnail || movieVideoMoviesItem.thumbnail}`
  const thumbnail = movieVideoItem.thumbnail || movieVideoMoviesItem.thumbnail

  useEffect(() => {
    let timer
    if (showTimer && accordionExpanded && seconds > 0) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : 0))
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [showTimer, accordionExpanded, seconds])

  const toggleAccordion = () => {
    setAccordionExpanded(prevState => !prevState)
    if (!accordionExpanded) {
      setSeconds(30) // Reset the timer when accordion is expanded
    }
  }

  const handleStartTimer = () => {
    setShowTimer(true)
    setAccordionExpanded(true)
  }

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#0e0e0e',
        minHeight: '100vh'
      }}
    >
              <div
          className='shadow-lg flex items-center justify-center'
          role='navigation'
        >
          <ul
            id='menu-header-menu'
            className='menu flex flex-wrap justify-center'
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
                <a href='../../trailers/'>
                  <h3 className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'>
                    Trailers<span className='p'></span>
                  </h3>
                </a>
              </li>
            </button>
            <button className='border border-pink-600 p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11610' className='menu-graphicdesign'>
                <a
                  href='../../movies/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Movies<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-pink-600 p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='../../tvshow'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  TV Series <span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-pink-600 p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='../../adult/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Adult<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-pink-600 p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../../latest/'
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
          className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl mt-2 flex items-center justify-center'
          style={{ marginTop: '25px', marginBottom: '25px' }}
        >
          <span className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'>
            For Request or Demand Movies & TV Series Join Telegram
            <i className='fab fa-telegram text-blue-600 hover:text-gray-600 ml-2 w-12 h-12 animate-pulse '></i>
          </span>
        </a>
      <h2
        className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-4xl hover:text-blue-800 font-bold mt-2'
        style={{ marginBottom: '20px' }}
      >
        Watch {adult ? adult.name : 'Loading...'}
      </h2>
      <div
        style={{
          width: '100%',
          height: '500px',
          overflow: 'hidden',
          position: 'relative'
        }}
        className='rounded-xl mr-8 flex flex-col border-1 border-blue-600 bg-black p-2'
      >
        {adult && (
          <>
            <iframe
              frameBorder='0'
              src={src}
              width='100%'
              height='450px'
              allowFullScreen
              scrolling='0'
              title='Video Player'
              style={{
                filter:
                  'contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(15deg)'
              }}
            ></iframe>

            {thumbnail && (
              <img
                src={thumbnail}
                alt='Video Thumbnail'
                style={{
                  position: 'absolute',
                  top: '2px',
                  left: '10px',
                  width: '100px',
                  height: '56px',
                  borderRadius: '10px'
                }}
              />
            )}
          </>
        )}
      </div>
 <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          route='adult'
          style={{
            marginTop: '50px',
            marginBottom: '50px',
            borderRadius: '50px',
            boxShadow: '0 0 10px 0 #fff',
            filter:
              'contrast(1.1) saturate(1.2) brightness(1.3) hue-rotate(0deg)'
          }}
        />
      <h2
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'
          style={{ fontFamily: 'Poppins, sans-serif',marginTop:'20px' }}
        >
          Click to Download {adult.name}
        </h2>

        <div
          className='flex flex-col items-center justify-center'
          style={{
            marginTop: '50px',
            marginBottom: '50px',
            filter:
              'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
          }}
        >
          {!showTimer ? (
            <button
              onClick={handleStartTimer}
              className='animate-pulse bg-gradient-to-r from-amber-500 to-pink-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300 text-2xl'
            >
              Download Now
            </button>
          ) : (
            <>
              <button
                onClick={toggleAccordion}
                className='animate-pulse bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300 text-2xl'
                style={{ marginBottom: '20px' }}
              >
                {accordionExpanded ? 'Click to Stop Download' : 'Download Now'}
              </button>

              {accordionExpanded && (
                <>
                  {seconds > 0 ? (
                    <p
                      className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl font-bold mb-4'
                      style={{ marginTop: '50px' }}
                    >
                      Your download link will be ready in {seconds} seconds...
                    </p>
                  ) : (
                    <p
                      className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl font-bold mb-4'
                      style={{ marginTop: '50px' }}
                    >
                      Your download link is ready.
                    </p>
                  )}
                </>
              )}
            </>
          )}
        </div>

        {accordionExpanded && (
          <div
            style={{
              width: '100%',
              height: '450px',
              overflow: 'hidden',
              marginTop: '20px',
              marginBottom: '20px'
            }}
            className='rounded-xl flex  p-2 items-center justify-center'
          >
            <iframe
              src={`https://geo.dailymotion.com/player/xkdl0.html?video=${adult.traileritem}&mute=true&Autoquality=1080p`}
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allowFullScreen
              title='Dailymotion Video Player'
              allow='autoplay; encrypted-media'
            ></iframe>
          </div>
        )}

        {seconds === 0 && accordionExpanded && (
          <div>
            {Object.keys(adult)
              .filter(key => key.startsWith('downloadlink'))
              .map((key, index) => (
                <Link key={index} href={adult[key]} target='_blank'>
                  <div
                  className='bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:bg-gradient-to-l hover:from-pink-600 hover:to-amber-600 transition-all duration-300 ease-in-out w-auto max-w-xs'

                    style={{
                      margin: 'auto',
                      marginBottom: '50px',
                      borderRadius: '50px',
                      boxShadow: '0 0 10px 0 #fff',
                      filter:
                        'contrast(1.1) saturate(1.2) brightness(1.3) hue-rotate(0deg)'
                    }}
                  >
                    <span
                      className='animate-pulse'
                      style={{
                        color: key === 'downloadlink1' ? '#FF0000' : '#0efa06',
                        fontSize: '24px',
                        textShadow: '3px 5px 5px #000'
                      }}
                    >
                      <i
                        className={
                          key === 'downloadlink1'
                            ? 'fa fa-magnet'
                            : 'fa fa-download'
                        }
                        aria-hidden='true'
                      ></i>{' '}
                    </span>
                    Download Episode {index + 1}
                  </div>
                </Link>
              ))}
          </div>
      )}
    </div>
  )
}

export async function getServerSideProps () {
  const res = await fetch('https://123moviesonline.vercel.app/adultp2.json')
  const data = await res.json()
  const selectedAdult = data.find(adult => adult.id === 'INDEX07')
  return {
    props: {
      adult: selectedAdult
    }
  }
}

export default AdultDetail
