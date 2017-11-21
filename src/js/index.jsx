require('../sass/index.scss');
import 'normalize.css';


import React from "react";
import ReactDOM from "react-dom";


const STATE_PICK = 'pick'
const STATE_ANIMATE = 'animate'

const TYPE_COUNT = 8


class Meerkats extends React.Component {
  render() {
    return (
      <div>
        <h1>Meerkats</h1>
        <h3>{ this.props.number }</h3>
        <button onClick={ this.props.reset }>RESET</button>
      </div>
    )
  }
}

class Birds extends React.Component {
  render() {
    return (
      <div>
        <h1>Birds</h1>
        <h3>{ this.props.number }</h3>
        <button onClick={ this.props.reset }>RESET</button>
      </div>
    )
  }
}

class Ducks extends React.Component {
  render() {
    return (
      <div>
        <h1>Ducks</h1>
        <h3>{ this.props.number }</h3>
        <button onClick={ this.props.reset }>RESET</button>
      </div>
    )
  }
}

class Scarabeus extends React.Component {
  render() {
    return (
      <div>
        <h1>Scarabeus</h1>
        <h3>{ this.props.number }</h3>
        <button onClick={ this.props.reset }>RESET</button>
      </div>
    )
  }
}

class Chameleon extends React.Component {
  render() {
    return (
      <div>
        <h1>Chameleon</h1>
        <h3>{ this.props.number }</h3>
        <button onClick={ this.props.reset }>RESET</button>
      </div>
    )
  }
}

class Penguins extends React.Component {
  render() {
    return (
      <div>
        <h1>Penguins</h1>
        <h3>{ this.props.number }</h3>
        <button onClick={ this.props.reset }>RESET</button>
      </div>
    )
  }
}

class Flies extends React.Component {
  render() {
    return (
      <div>
        <h1>Flies</h1>
        <h3>{ this.props.number }</h3>
        <button onClick={ this.props.reset }>RESET</button>
      </div>
    )
  }
}

class Bees extends React.Component {
  render() {
    return (
      <div>
        <h1>Bees</h1>
        <h3>{ this.props.number }</h3>
        <button onClick={ this.props.reset }>RESET</button>
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
          return <Meerkats number={ number } reset={ this.reset.bind(this) } />
        case 1:
          return <Birds number={ number } reset={ this.reset.bind(this) } />
        case 2:
          return <Ducks number={ number } reset={ this.reset.bind(this) } />
        case 3:
          return <Scarabeus number={ number } reset={ this.reset.bind(this) } />
        case 4:
          return <Chameleon number={ number } reset={ this.reset.bind(this) } />
        case 5:
          return <Penguins number={ number } reset={ this.reset.bind(this) } />
        case 6:
          return <Flies number={ number } reset={ this.reset.bind(this) } />
        case 7:
          return <Bees number={ number } reset={ this.reset.bind(this) } />
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
