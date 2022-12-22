import React from 'react'

const Gallery = () => {
  return (
    <>
      <div className='allpage-background'>
        <div className='allpage-cont'>
            <h1>Our Gallery</h1>
        </div>
    </div>

     <div className="gallery">
        <div className="gallery-row">
          <div className="gallery-col">
            <img src="./img/g1.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g2.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g3.jpeg" alt="" />
          </div>
        </div>
        <div className="gallery-row">
          <div className="gallery-col">
            <img src="./img/g4.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g5.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g6.jpeg" alt="" />
          </div>
        </div>
        <div className="gallery-row">
          <div className="gallery-col">
            <img src="./img/g7.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            <img src="./img/g8.jpeg" alt="" />
          </div>
          <div className="gallery-col">
            {/* <img src="./img/g3.jpeg" alt="" /> */}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Gallery
