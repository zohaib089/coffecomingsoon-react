import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom'
class Pricing extends Component {
  state ={
    prices:[2.50,3.50,5.0],
    sizes:['Small','Medium','Big'],
    desc:[
      ' Lo scopo dell’utilizzo del Lorem Ipsum è che offre dell’utilizzo del Lorem Ipsum',
      'Lorem Ipsum è considerato il testo segnaposto standard dell’utilizzo del Lorem Ipsum',
      'Lorem segnaposto standard sin dal sedicesimo secolo dell’utilizzo del Lorem Ipsum'
    ],
    linkto:['http://sales/b','http://sales/b','http://sales/b'],
    delay:[500,0,1000]
  }
  
  showBoxes=()=>(
    this.state.prices.map((box,i)=>(
      <Zoom 
      key={i}
      delay={this.state.delay[i]}
      >
         <div className="pricing_item">
      <div className="pricing_inner_wrapper">
        <div className="pricing_title">
          <span>&euro; {this.state.prices[i]}</span>
          <span>{this.state.sizes[i]}</span>
        </div>
        <div className="pricing_description">
          {this.state.desc[i]}
        </div>
        <div className="pricing_buttons">
          <MyButton
            text="Purchase"
            bck="#ffa800"
            color="#ffffff"
            link={this.state.linkto[i]}
          />
        </div>
      </div>

      </div>
      </Zoom>
     
    )
  )
  )
  render() {
    return (
      <div className="bck_black">
      <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
              {this.showBoxes()}
          </div>
      </div>
        
      </div>
    )
  }
}

export default Pricing
