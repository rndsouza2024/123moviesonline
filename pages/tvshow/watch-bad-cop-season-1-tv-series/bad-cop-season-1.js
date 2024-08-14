import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import styles from '@styles/iframeStyles.module.css'
import Link from 'next/link'

const TvshowDetail = ({ tvshow }) => {
  const router = useRouter()
  const [playerReady, setPlayerReady] = useState(false)
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  const playerRef = useRef(null)
  const currentIndexRef = useRef(0)
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const videoItems = tvshow.videotvitem
  const [seconds, setSeconds] = useState(30)
  const [showTimer, setShowTimer] = useState(false)
  const [accordionExpanded, setAccordionExpanded] = useState(false)

  const parseVideoItem = item => {
    const [id, season, episode] = item.split('/')
    return { id, season: parseInt(season, 10), episode: parseInt(episode, 20) }
  }

  const videoSources = tvshow.videotvshow.map(item => {
    const { id, season, episode } = parseVideoItem(item)
    return {
      name: `Episode ${episode}`,
      urls: [
        `https://short.ink/${videoItems[currentEpisodeIndex]}?thumbnail=${tvshow.image1}`,
        `https://vidsrc.me/embed/tv?imdb=${id}&season=${season}&episode=${episode}`,
        `https://vidsrc.pro/embed/tv/${id}/${season}/${episode}`,
        `https://vidsrc.cc/v2/embed/tv/${id}/${season}/${episode}`,
        `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`,
        `https://autoembed.co/tv/imdb/${id}-${season}-${episode}`,
        `https://multiembed.mov/directstream.php?video_id=${id}&s=${season}&e=${episode}`
      ]
    }
  })

  const handleNextEpisode = () => {
    if (currentEpisodeIndex < videoSources.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  const handlePreviousEpisode = () => {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }

  const handlePlayerSelect = index => {
    setCurrentPlayerIndex(index)
  }

  const currentVideoSources = videoSources[currentEpisodeIndex].urls
  const src = currentVideoSources[currentPlayerIndex] || ''
  const { episode } = parseVideoItem(tvshow.videotvshow[currentEpisodeIndex])

  const episodeNumber = currentEpisodeIndex + 1
  const prevEpisodeNumber =
    currentEpisodeIndex === 0 ? videoSources.length : episodeNumber - 1
  const nextEpisodeNumber = (episodeNumber % videoSources.length) + 1

  useEffect(() => {
    const detectMobileDevice = () => {
      const userAgent =
        typeof window.navigator === 'undefined' ? '' : navigator.userAgent
      const mobile = Boolean(
        userAgent.match(
          /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      )
      setIsMobileDevice(mobile)
    }

    detectMobileDevice()
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0) // Scroll to the top of the page on route change
    }

    // Scroll to top on initial render
    window.scrollTo(0, 0)

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange)

    // Cleanup event listener on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <h2
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-4xl hover:text-blue-800 font-bold mt-2'
          style={{ marginBottom: '20px' }}
        >
          Watch {tvshow.name}
        </h2>

        <div style={{ width: '100%', maxWidth: '800px', marginBottom: '20px' }}>
          <iframe
            frameBorder='0'
            src={src}
            width='100%'
            height='450px'
            allowFullScreen
            scrolling='0'
            title='Video Player'
            style={{
              borderRadius: '8px',
              filter:
                'contrast(1.1) saturate(1.2) brightness(1.3) hue-rotate(0deg)'
            }}
          ></iframe>

          <p
            className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-sm'
            style={{
              fontFamily: 'Poppins, sans-serif',
              textShadow: '1px 1px 1px 0 #fff',
              filter:
                'contrast(1.2) saturate(1.3) brightness(1.1) hue-rotate(15deg)'
            }}
          >
            *Note: Use Setting in Player to improve the Quality of video to HD
            Quality 1080p.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '800px',
            marginBottom: '20px'
          }}
        >
          <button
            onClick={handleNextEpisode}
            disabled={videoSources.length === 0}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              fontWeight: 'bold',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Next Episode {nextEpisodeNumber}
          </button>
          <button
            onClick={handlePreviousEpisode}
            disabled={videoSources.length === 0}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              fontWeight: 'bold',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Previous Episode {prevEpisodeNumber}
          </button>
        </div>

        <h2
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'
          style={{ marginBottom: '10px' }}
        >
          Select Player To Watch
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {currentVideoSources.map((source, index) => (
            <button
              key={index}
              onClick={() => handlePlayerSelect(index)}
              className={`mx-2 my-1 px-4 py-2 rounded ${
                currentPlayerIndex === index
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-black'
              } hover:bg-green-500 hover:text-white transition duration-300 ease-in-out`}
              style={{
                padding: '10px 20px',
                margin: '5px',
                border: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Player {index + 1}
            </button>
          ))}
        </div>
        <h2
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Click to Download Episode {tvshow.name}
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
              src={`https://geo.dailymotion.com/player/xkdl0.html?video=${tvshow.traileritem}&mute=true&Autoquality=1080p`}
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
            {Object.keys(tvshow)
              .filter(key => key.startsWith('downloadlink'))
              .map((key, index) => (
                <Link key={index} href={tvshow[key]} target='_blank'>
                  <div
                    className='bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                    style={{
                      margin: 'auto',
                      marginBottom: '50px',
                      borderRadius: '50px',
                      fontWeight: 'bold',
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
                        fontWeight: 'bold',
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
    </div>
  )
}

export async function getServerSideProps () {
  const res = await fetch('https://123moviesonline.vercel.app/tvshow.json')
  const data = await res.json()
  const selectedTvshow = data.find(tvshow => tvshow.id === 'INDEX31')
  return {
    props: {
      tvshow: selectedTvshow
    }
  }
}

export default TvshowDetail
