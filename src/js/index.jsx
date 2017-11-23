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


class Meerkat extends React.Component {
  render() {
    return (
      <div className="scene meerkat" onClick={ this.props.reset }>
      </div>
    )
  }
}

class BirdItem extends React.Component {
  render() {
    return (
      <div style={this.props.style} className="bird">
        <div className="beak"></div>
        <div className="body-top"></div>
        <div className="body-bottom"></div>
        <div className="tail"></div>
        <div className="wing-right">
          <div className="part1"></div>
          <div className="part2"></div>
        </div>
        <div className="wing-left">
          <div className="part1"></div>
          <div className="part2"></div>
        </div>
      </div>
    )
  }
}

class Loris extends React.Component {
  render() {
    return (
			<div id="lori_body">

				<div id="right_hand">
					<div class="finger1 on"></div>
					<div class="finger2 on"></div>
					<div class="finger3 on"></div>
					<div class="finger4 on"></div>
					<div id="paw_print"></div>
				</div>

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
    )
  }
}


class Bird extends React.Component {
  render() {
    const count = this.props.number
    switch(count) {
      case 1:
        return (
          <div className="scene bird" onClick={ this.props.reset }>
            <div className="birds">
              <BirdItem />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="scene bird" onClick={ this.props.reset }>
            <div className="birds">
              <BirdItem />
              <BirdItem style={{top: '41px', left: '66px'}} />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="scene bird" onClick={ this.props.reset }>
            <div className="birds">
              <BirdItem />
              <BirdItem style={{top: '41px', left: '66px'}} />
              <BirdItem style={{top: '61px', left: '-41px'}} />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="scene bird" onClick={ this.props.reset }>
            <div className="birds">
              <BirdItem />
              <BirdItem style={{top: '41px', left: '66px'}} />
              <BirdItem style={{top: '61px', left: '-41px'}} />
              <BirdItem style={{top: '93px', left: '133px'}} />
            </div>
          </div>
        )
    }
  }
}

class Duck extends React.Component {
  render() {
    return (
      <div className="scene duck" onClick={ this.props.reset }>
      </div>
    )
  }
}

class Scarabeus extends React.Component {
  render() {
    return (
      <div className="scene scarabeus" onClick={ this.props.reset }>
      </div>
    )
  }
}

class Chameleon extends React.Component {
  render() {
    return (
      <div className="scene chameleon" onClick={ this.props.reset }>
      </div>
    )
  }
}

class Penguin extends React.Component {
  render() {
    return (
      <div className="scene penguin" onClick={ this.props.reset }>
      </div>
    )
  }
}

class Fly extends React.Component {
  render() {
    return (
      <div className="scene fly" onClick={ this.props.reset }>
      </div>
    )
  }
}

class Bee extends React.Component {
  render() {
    return (
      <div className="scene bee" onClick={ this.props.reset }>
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
        <div>
          <button onClick={ this.pickThree.bind(this) }>3</button>
          <button onClick={ this.pickFour.bind(this) }>4</button>
        </div>
      )
    } else {
      const number = this.state.number
      const type = this.state.type
      switch (type) {
        case 0:
          return <Meerkat number={ number } reset={ this.reset.bind(this) } />
        case 1:
          return <Bird number={ number } reset={ this.reset.bind(this) } />
        case 2:
          return <Duck number={ number } reset={ this.reset.bind(this) } />
        case 3:
          return <Scarabeus number={ number } reset={ this.reset.bind(this) } />
        case 4:
          return <Chameleon number={ number } reset={ this.reset.bind(this) } />
        case 5:
          return <Penguin number={ number } reset={ this.reset.bind(this) } />
        case 6:
          return <Fly number={ number } reset={ this.reset.bind(this) } />
        case 7:
          return <Bee number={ number } reset={ this.reset.bind(this) } />
      }
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
