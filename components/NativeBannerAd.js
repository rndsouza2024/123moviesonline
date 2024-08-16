
// import React, { useState } from 'react';
// import styles from '../styles/NativeBannerAd.module.css';

// const NativeBannerAd = () => {
//   const [visible, setVisible] = useState(true);
//   const [bookmarkMessage, setBookmarkMessage] = useState('');

//   const closeAd = () => {
//     setVisible(false);
//   };

//   const handleBookmark = () => {
//     const title = document.title;
//     const url = window.location.href;

//     // Bookmark the page (this only works in some browsers)
//     if (window.sidebar && window.sidebar.addPanel) {
//       // For Firefox
//       window.sidebar.addPanel(title, url, '');
//     } else if (window.external && ('AddFavorite' in window.external)) {
//       // For IE
//       window.external.AddFavorite(url, title);
//     } else if (window.opera && window.print) {
//       // For Opera
//       this.title = title;
//       return true;
//     } else {
//       // For other browsers (Chrome, Safari, etc.)
//       alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') !== -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
//     }

//     // Display a message that the page is bookmarked
//     setBookmarkMessage('This website has been added to your bookmarks!');
//   };

//   if (!visible) return null;

//   return (
//     <div className={styles.adOverlay}>
//       <div className={styles.adContent}>
//         <button className={styles.closeButton} onClick={closeAd}>
//           ×
//         </button>
//         <div className={styles.adInnerContent}>
//           <h2>Discover Amazing Movies & Latest Tv Shows!</h2>
//           <p>Stream the latest movies in HD. Explore our collection and enjoy your favorites now!</p>
//           {/* <button className={styles.ctaButton}>Watch Now</button> */}
//         </div>
//         {bookmarkMessage ? (
//           <div className={styles.bookmarkMessage}>
//             {bookmarkMessage}
//           </div>
//         ) : (
//           <div className={styles.bookmarkPrompt}>
//             <p>Would you like to add this website to your bookmarks?</p>
//             <button className={styles.yesButton} onClick={handleBookmark}>
//               Yes
//             </button>
//             <button className={styles.noButton} onClick={closeAd}>
//               No
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NativeBannerAd;

import React, { useState, useEffect } from 'react';
import styles from '../styles/NativeBannerAd.module.css';

const NativeBannerAd = () => {
  const [visible, setVisible] = useState(false); // Initially hidden
  const [bookmarkMessage, setBookmarkMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // Show the ad after 30 seconds
    }, 10000); // 30000 milliseconds = 30 seconds

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, []);

  const closeAd = () => {
    setVisible(false);
  };

  const handleBookmark = () => {
    const title = document.title;
    const url = window.location.href;

    if (window.sidebar && window.sidebar.addPanel) {
      window.sidebar.addPanel(title, url, '');
    } else if (window.external && 'AddFavorite' in window.external) {
      window.external.AddFavorite(url, title);
    } else if (window.opera && window.print) {
      this.title = title;
      return true;
    } else {
      alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') !== -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
    }

    setBookmarkMessage('This website has been added to your bookmarks!');
  };

  if (!visible) return null;

  return (
    <div className={styles.adOverlay}>
      <div className={styles.adContent}>
        <button className={styles.closeButton} onClick={closeAd}>
          ×
        </button>
        <div className={styles.adInnerContent}>
          <h2>Discover Amazing Movies & Latest Tv Shows!</h2>
          <p>Stream the latest movies in HD. Explore our collection and enjoy your favorites now!</p>
        </div>
        {bookmarkMessage ? (
          <div className={styles.bookmarkMessage}>
            {bookmarkMessage}
          </div>
        ) : (
          <div className={styles.bookmarkPrompt}>
            <p>Would you like to add this website to your bookmarks?</p>
            <button className={styles.yesButton} onClick={handleBookmark}>
              Yes
            </button>
            <button className={styles.noButton} onClick={closeAd}>
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NativeBannerAd;

