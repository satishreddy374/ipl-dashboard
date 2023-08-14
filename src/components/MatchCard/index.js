// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = recentMatch

  const status =
    matchStatus === 'Won' ? 'winner-match-status' : 'runner-match-status'

  return (
    <li className="card-list-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo-image"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${status}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
