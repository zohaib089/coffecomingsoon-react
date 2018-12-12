import React from 'react'

const Location =() => {
  return (
    <div className="location_wrapper">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.409581326111!2d11.711473515561428!3d45.58231047910251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f2c9c730ce2a3%3A0x728d1f110a4d2e18!2sVia+Roma%2C+35010+Gazzo+PD!5e0!3m2!1sit!2sit!4v1543397614295"
       width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen>
      </iframe>
      <div className="location_tag">
          <div>Location</div>
      </div>
    </div>
  )
}
export default Location