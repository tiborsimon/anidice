import React from "react";
import ReactDOM from "react-dom";

document.body.requestFullscreen()

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

class Bird extends React.Component {
  render() {
    return (
      <div className="scene bird" onClick={ this.props.reset }>
      </div>
    )
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
    const type = Math.floor(Math.random() * TYPE_COUNT)
    // const type = 1
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
