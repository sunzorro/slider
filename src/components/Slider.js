import React from 'react';

import Img1 from '../images/demo1.jpg';
import Img2 from '../images/demo2.jpg';
import Img3 from '../images/demo3.jpg';

class Slider extends React.Component{
  constructor(){
    super();
    this.state={
      nowLocal:0
    }
  }
  turn(){
    if(this.state.nowLocal <2){
      this.setState({
        nowLocal:this.state.nowLocal+1
      })
    }else{
        this.setState({
          nowLocal:0
          })
        }
    console.log(this.state.nowLocal)
  }
  componentDidMount(){
    this.interval=setInterval(this.turn.bind(this),1000)
  }
  pausePlay(){
    clearInterval(this.interval)
  }
  scroll(option){
    this.pausePlay();
    let x = this.state.nowLocal + option
    if(x < 0){
      x = 2
    }
    if(x > 2){
      x = 0
    }
    this.setState({
      nowLocal:x
    })
  }
  render(){
    let styles={
      ul:{
        left:this.state.nowLocal*(-100) +'%'
      }
    }
    return(
      <div className="box">
        <ul style={styles.ul}
          onMouseOver={this.pausePlay.bind(this)}
          onMouseOut={this.componentDidMount.bind(this)}
          >
          <li><img src={Img1} /></li>
          <li><img src={Img2} /></li>
          <li><img src={Img3} /></li>
        </ul>
        <div>
          <span className='arrow left'
            onClick={this.scroll.bind(this,-1)}
            >&lt;</span>
          <span className='arrow right'
            onClick={this.scroll.bind(this,1)}
            >&gt;</span>
        </div>
      </div>
    )
  }
}
export default Slider;
