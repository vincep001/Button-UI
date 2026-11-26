import { useState } from 'react'
import cloud1 from './assets/white-cloud-clipart-design-illustration-free-png.webp'
import cloud2 from './assets/white-cloud-with-shadow-design-element-free-png.webp'
import './App.css'


function App() {
  const [showMedia, setShowMedia] = useState(false)

  const mediaUrl = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmtxNm52bmc4M2pqYmthNGJra3VnM2JrenRxbXFvNXF5ZGNlYmp4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UoTiYh27n5nnmVjAi6/giphy.gif'

  return (
    <>
      <div className="cloud-layer">
      <img src={cloud1} className="cloud cloud-one" alt="" />
      <img src={cloud2} className="cloud cloud-two" alt="" />
      <img src={cloud1} className="cloud cloud-three" alt="" />
      <img src={cloud2} className="cloud cloud-four" alt="" />
      <img src={cloud1} className="cloud cloud-five" alt="" />
      <img src={cloud2} className="cloud cloud-six" alt="" />
      <img src={cloud1} className="cloud cloud-seven" alt="" />
    </div>
    <main className="container">
      <button
        className="animated-button"
        onClick={() => setShowMedia(true)}
      >
        Click Me
      </button>

      {showMedia && (
       <div className="modal">
          <div
            className="modal-content zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={mediaUrl} alt="Animated GIF" />

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
  </>
  )
}

export default App