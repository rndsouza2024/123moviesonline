import { useState, useEffect } from 'react';
import styles from '../styles/videoad.module.css'; // Adjust the path as needed

const AdComponent = ({ id }) => {
  const [ad, setAd] = useState(null);
  const [showAd, setShowAd] = useState(false); // Initially false
  const [showCloseButton, setShowCloseButton] = useState(false); // Controls visibility of close button
  const [countdown, setCountdown] = useState(10); // 10 seconds countdown

  // Fetch ad based on ID when the component mounts or when 'id' changes
  useEffect(() => {
    if (id) {
      fetch('/ads.json')
        .then(response => response.json())
        .then(data => {
          const selectedAd = data.find(ad => ad.id === id);
          setAd(selectedAd); // Set the selected ad
        })
        .catch(error => console.error('Error fetching ad:', error));
    }
  }, [id]);

  // Show ad after 10 seconds from component mount if ad is available
  useEffect(() => {
    // Delay showing ad
    const showAdTimer = setTimeout(() => {
      if (ad) {
        setShowAd(true);
      }
    }, 30000); // 10 seconds

    return () => clearTimeout(showAdTimer);
  }, [ad]);

  // Countdown logic when ad is shown
  useEffect(() => {
    if (showAd) {
      const countdownTimer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownTimer);
            setShowCloseButton(true); // Show close button after countdown ends
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownTimer);
    }
  }, [showAd]);

  const handleClose = () => {
    setShowAd(false);
  };

  if (!showAd || !ad) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.adContainer}>
        <iframe
          className={styles.iframe}
          src={`https://geo.dailymotion.com/player/xkdl0.html?video=${ad.videourl}&mute=true&Autoquality=1080p`}
          frameBorder="0"
          allowFullScreen
          title="Advertisement"
        ></iframe>
        <div className={styles.timer}>Closing in {countdown}s</div>
        {showCloseButton && (
          <button className={styles.closeButton} onClick={handleClose}>Close</button>
        )}
      </div>
    </div>
  );
};

export default AdComponent;
