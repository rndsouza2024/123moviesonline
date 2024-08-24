// Function to load the ad code
function loadAdCode () {
  var adScript = document.createElement('script')
  adScript.src = 'https://alwingulla.com/88/tag.min.js'
  adScript.setAttribute('data-zone', '92271')
  adScript.async = true
  adScript.setAttribute('data-cfasync', 'false')

  // Handle script load errors
  adScript.onerror = function () {
    console.error('Failed to load ad script')
  }

  document.body.appendChild(adScript)
}

// Set a timeout to load the ad code after 15 seconds
setTimeout(loadAdCode, 10000) // 15000 milliseconds = 15 seconds
