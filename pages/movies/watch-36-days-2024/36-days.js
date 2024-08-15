import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import styles from '@styles/iframeStyles.module.css'
import Link from 'next/link'

const MoviesDetail = ({ movie }) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const videoPlayerRef = useRef(null)
  const [seconds, setSeconds] = useState(30)
  const [showTimer, setShowTimer] = useState(false)
  const [accordionExpanded, setAccordionExpanded] = useState(false)
  // Parse video item to extract ID
  const parseVideoItem = item => {
    if (!item) return { id: '' }
    const [id] = item.split('?')
    return { id }
  }

  // Get movie video item
  const movieVideoItem =
    movie && movie.videomoviesitem && movie.videomoviesitem.length > 0
      ? parseVideoItem(movie.videomoviesitem[0])
      : { id: '' }

  // Movie ID
  const movieId = movie.videomovies[0]

  // Define video sources with provided URLs
  const videoSources = [
    `https://short.ink/${movieVideoItem.id}?thumbnail=${movie.image1}`,
    `https://vidsrc.me/embed/movie?imdb=${movieId}`,
    `https://vidsrc.pro/embed/movie/${movieId}`,
    `https://vidsrc.cc/v2/embed/movie/${movieId}`,
    `https://www.2embed.cc/embed/${movieId}`,
    `https://autoembed.co/movie/imdb/${movieId}`,
    `https://multiembed.mov/directstream.php?video_id=${movieId}`
  ]

  // Handle player selection
  const handlePlayerSelect = index => {
    setCurrentPlayerIndex(index)
  }

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
         <h2
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-4xl hover:text-blue-800 font-bold mt-2'
          style={{ marginBottom: '20px' }}
        >
          Watch {movie.name}
        </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
      
        <div style={{ width: '100%', maxWidth: '800px', marginBottom: '20px' }}>
          <iframe
            ref={videoPlayerRef}
            frameBorder='0'
            src={videoSources[currentPlayerIndex]}
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
        <p
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-4xl font-bold mt-2'
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Select Player To Watch.
        </p>

        <div className='flex flex-wrap justify-center mb-4 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-bg font-semibold mt-2'>
          {videoSources.map((source, index) => (
            <button
              key={index}
              onClick={() => handlePlayerSelect(index)}
              className={`px-4 py-2 border rounded mx-2 my-1 ${
                currentPlayerIndex === index
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200'
              } hover:bg-green-500 hover:text-white`}
            >
              Player {index + 1}
            </button>
          ))}
        </div>

        <h2
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Click to Download {movie.name}
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
              src={`https://geo.dailymotion.com/player/xkdl0.html?video=${movie.traileritem}&mute=true&Autoquality=1080p`}
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
            {Object.keys(movie)
              .filter(key => key.startsWith('downloadlink'))
              .map((key, index) => (
                <Link key={index} href={movie[key]} target='_blank'>
                  <div
                    className='bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
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
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://123moviesonline.vercel.app/moviesp3.json')
  const data = await res.json()
  const selectedMovie = data.find(movie => movie.id === 'INDEX31')
  return {
    props: {
      movie: selectedMovie
    }
  }
}

export default MoviesDetail
