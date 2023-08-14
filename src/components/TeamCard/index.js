// Write your code here

import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, name, teamImageUrl} = teamDetails

    return (
      <li className="list-style-container">
        <Link
          to={`/team-matches/${id}`}
          className="team-logo-and-name-container"
        >
          <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
          <p className="team-name-text">{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
