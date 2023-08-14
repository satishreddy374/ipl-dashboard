// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatch

  return (
    <div className="latest-match-details-container">
      <div className="date-venue-and-result-container">
        <p className="competing-team-text">{competingTeam}</p>
        <p className="date-text">{date}</p>
        <p className="venue-text">{venue}</p>
        <p className="result-text">{result}</p>
      </div>
      <div className="competing-team-logo-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <div className="umpire-first-and-seconds-innings-container">
        <p className="innings-text">First Innings</p>
        <p className="innings-team-name">{firstInnings}</p>
        <p className="innings-text">Second Innings</p>
        <p className="innings-team-name">{secondInnings}</p>
        <h1 className="man-of-the-match-text">Man of The Match</h1>
        <p className="man-of-the-match-player-name">{manOfTheMatch}</p>
        <h1 className="umpires-text">Umpires</h1>
        <p className="umpires-name">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
