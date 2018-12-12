import React from 'react'
import Fade from 'react-reveal/Fade'
const Footer = () => {
  return (
    <footer className="black" style={{backgroundColor:'black'}}>
       <Fade delay={500}>
           <div className="font_righteous footer_logo_venue">
           The Coffee
           </div>
           <div className="footer_copyright">
              The Coffee 2018. All rights reserved
           </div>
       </Fade>
    </footer>
  )
}

export default Footer
