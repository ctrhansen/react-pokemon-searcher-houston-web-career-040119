import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      flipCard: true
    }
  }

  flipCard = () => {
    this.setState({
      flipCard: !this.state.flipCard
    })
  }
  render() {
    console.log(this.props.pokemon)
    let cardSide
    if (this.state.flipCard === true) {
      cardSide = this.props.pokemon.sprites.front
    } else {
      cardSide = this.props.pokemon.sprites.back
    }
    return (
      <Card>
        <div>
          <div className="image" onClick={this.flipCard}>
            <img src={cardSide} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(s => s.name === 'hp').value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
