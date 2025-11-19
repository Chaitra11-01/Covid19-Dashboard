import {Link} from 'react-router-dom'
import './index.css'

const TotalStats = props => {
  const {data} = props
  const {
    stateName,
    confirmed,
    recovered,
    deceased,
    other,
    population,
    stateCode,
  } = data

  const active = confirmed - recovered - deceased - other

  return (
    <Link to={`/state/${stateCode}`} className="link-home">
      <li
        className="list-item"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr',
          alignItems: 'center',
        }}
      >
        <div className="states-container-home">
          <p className="states-names-home">{stateName}</p>
        </div>
        <div className="column">
          <p className="confirmed">{confirmed}</p>
        </div>
        <div className="column">
          <p className="active-home">{active}</p>
        </div>
        <div className="column">
          <p className="recovered-home">{recovered}</p>
        </div>
        <div className="column">
          <p className="deceased-home">{deceased}</p>
        </div>
        <div className="column">
          <p className="population-home">{population}</p>
        </div>
      </li>
    </Link>
  )
}

export default TotalStats
