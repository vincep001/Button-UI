import { useState } from 'react'
import './App.css'

function App() {
  const [showMedia, setShowMedia] = useState(false)

  
  const mediaUrl = ''

  const mediaType = 'gif'



  return (
    <main className="container">
      <button
        className="animated-button"
        onClick={() => setShowMedia(true)}
      >
        Click Me
      </button>

      {showMedia && (
        <div className="modal" onClick={() => setShowMedia(false)}>
          <div className="modal-conten zoom-in" onClick={(e) => e.stopPropagation()}>
            {mediaType === 'video' ? (
              <video src={mediaUrl} controls autoPlay />
            ) : (
              <img src={mediaUrl} alt="Animated GIF" />
            )}

            <button
              className="close-button"
              onClick={() => setShowMedia(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default App