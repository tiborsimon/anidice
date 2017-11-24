import React from "react";
import ReactDOM from "react-dom";

window.addEventListener("load",function() {
  setTimeout(function(){
      window.scrollTo(0, 1);
  }, 0);
});

const STATE_PICK = 'pick'
const STATE_ANIMATE = 'animate'

const TYPE_COUNT = 8



class RightHand extends React.Component {
  render() {
    const number = this.props.number
    switch(number) {
      case 1:
        return (
          <div id="right_hand">
          <div class="finger1 on"></div>
          <div class="finger2"></div>
          <div class="finger3"></div>
          <div class="finger4"></div>
          <div id="paw_print"></div>
          </div>
        )
      case 2:
        return (
          <div id="right_hand">
          <div class="finger1 on"></div>
          <div class="finger2 on"></div>
          <div class="finger3"></div>
          <div class="finger4"></div>
          <div id="paw_print"></div>
          </div>
        )
      case 3:
        return (
          <div id="right_hand">
          <div class="finger1 on"></div>
          <div class="finger2 on"></div>
          <div class="finger3 on"></div>
          <div class="finger4"></div>
          <div id="paw_print"></div>
          </div>
        )
      case 4:
        return (
          <div id="right_hand">
          <div class="finger1 on"></div>
          <div class="finger2 on"></div>
          <div class="finger3 on"></div>
          <div class="finger4 on"></div>
          <div id="paw_print"></div>
          </div>
        )
    }
  }
}

class Loris extends React.Component {
  render() {
    return (
      <div className="scene"  onClick={ this.props.reset }>
        <div id="lori_body">

        <RightHand number={ this.props.number } />

        <div id="paw_print">
        <div id="fingers"></div>
        </div>
        <div id="left_hand">
        </div>

        <div id="right_leg">
        <div id="paw_print">
        <div id="fingers"></div>
        </div>
        </div>

        <div id="left_leg">
        <div id="paw_print">
        <div id="fingers"></div>
        </div>
        </div>

        <div id="left_ear"></div>
        <div id="right_ear"></div>

        <div id="head_under"></div>

        <div id="head">
        <div id="nose"></div>

        <div id="left_eye_background">
        <div id="gradient"></div>
        <div id="left_eye" align="center">
        <div id="cloud_holder">
        <div id="radial"></div>
        <div class="cloud"></div>
        </div>
        <div id="pupil_glimps2"></div>
        <div id="pupil_glimps"></div>
        <div id="pupil"></div>
        </div>
        </div>

        <div id="right_eye_background">
        <div id="right_eye" align="center">
        <div id="cloud_holder">
        <div id="radial"></div>
        <div class="cloud"></div>
        </div>
        <div id="pupil_glimps2"></div>
        <div id="pupil_glimps"></div>
        <div id="pupil"></div>
        </div>
        </div>
        </div>

        </div>
      </div>
    )
  }
}


class Dice extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      state: STATE_PICK,
      max: 4,
      type: 0
    }
  }

  render() {
    let state = this.state.state
    if (state == STATE_PICK) {
      return (
        <div className="selectButtons">
          <a className="selectButton" onClick={ this.pickThree.bind(this) }>3</a>
          <a className="selectButton" onClick={ this.pickFour.bind(this) }>4</a>
        </div>
      )
    } else {
      const number = this.state.number
      return <Loris number={ number } reset={ this.reset.bind(this) } />
    }
  }

  reset() {
    this.setState({
      state: STATE_PICK
    })
  }

  pickThree() {
    this.pick(3)
  }

  pickFour() {
    this.pick(4)
  }

  pick(max) {
    const number = Math.floor(Math.random() * max) + 1;
    // const type = Math.floor(Math.random() * TYPE_COUNT)
    const type = 1
    this.setState({
      state: STATE_ANIMATE,
      number,
      type
    })
  }

}

ReactDOM.render(
  <Dice />, 
  document.getElementById('app')
)
