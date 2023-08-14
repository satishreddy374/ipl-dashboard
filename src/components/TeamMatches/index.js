// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatchCompleteDetails: {},
    recentMatchCompleteDetails: [],
    isLoading: true,
    backgroundColor: '',
  }

  componentDidMount() {
    this.getTeamsCompleteData()
  }

  getTeamsCompleteData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData

    const updatedMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedRecentMatchDetails = recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    console.log(id)

    this.setState({
      teamBanner: teamBannerUrl,
      latestMatchCompleteDetails: updatedMatchDetails,
      recentMatchCompleteDetails: updatedRecentMatchDetails,
      isLoading: false,
      backgroundColor: id,
    })
  }

  render() {
    const {
      teamBanner,
      latestMatchCompleteDetails,
      recentMatchCompleteDetails,
      isLoading,
      backgroundColor,
    } = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loader-spinner">
            <Loader type="Oval" color="#000000" height={50} width={50} />
          </div>
        ) : (
          <div
            className={`complete-match-details-container ${backgroundColor}`}
          >
            <img
              src={teamBanner}
              alt="team banner"
              className="team-banner-image"
            />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <LatestMatch
              latestMatch={latestMatchCompleteDetails}
              key={latestMatchCompleteDetails.id}
            />
            <ul className="match-card-details-container">
              {recentMatchCompleteDetails.map(match => (
                <MatchCard recentMatch={match} key={match.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
