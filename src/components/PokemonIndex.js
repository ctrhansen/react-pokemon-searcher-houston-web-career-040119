import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      allPokemon: [],
    }
  }

  componentDidMount(){
    this.doFetch()
  }

  doFetch = () => { //remember syntax var =* () => {}
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allPokemon: data
      })
    })
  }

  addPokemon = (pokemon) => {

  

    let arr = this.state.allPokemon
    arr.push(pokemon)
    // debugger

    this.setState({
      allPokemon: arr
    })
  }


  render() {
    console.log(this.state.allPokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e) => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.allPokemon}/>
        <br />
        <PokemonForm addPoke={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
