import React from "react"
import { connect } from "react-redux"

import { fetchHeroes } from "../actions/heroesActions"

@connect((store) => {
  return {
    heroes: store.heroes.heroes,
    start: store.heroes.start,
  };
})
export default class Layout extends React.Component {

  fetchHeroes() {
    const { start } = this.props;
    this.props.dispatch(fetchHeroes(start))
  }

  render() {
    const { heroes } = this.props;

    const mappedHeroes = heroes.map(heroe => <div class="card" key={heroe.id}>
                                                <h1>{heroe.name}</h1>
                                                <img src={heroe.thumbnail.path + '.' + heroe.thumbnail.extension} />
                                                <p>{heroe.description}</p>
                                             </div>)

    return <div>
      <div class="card-list">{mappedHeroes}</div>
      <button onClick={this.fetchHeroes.bind(this)}>load heroes</button>
    </div>
  }
}
