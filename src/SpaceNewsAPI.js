import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './SpaceNewsAPI.css'

const SpaceNewsAPI = () => {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        axios
        .get('https://api.spacexdata.com/v2/launches')
        .then(res => {
            setFlights(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <ul className = 'flights-list'>
            {
                flights.map(
                    (flight) => (
                        <li key={flight.flight_number}>
                            <div className = 'flight-info'>
                                <img src={flight.links.mission_patch_small} alt={flight.mission_name}/>
                            </div>
                            <div className = 'flight-data'>
                                <h2>{flight.mission_name}</h2>
                                <p>Flight Number: {flight.flight_number}</p>
                                <p>Launched Date: {flight.launch_date_utc}</p>
                                <p>Flight Details: {flight.details}</p>
                                <p>Launch Year: {flight.launch_year}</p>
                                <a href={flight.links.article_link}>Read about the launch</a>
                            </div>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default SpaceNewsAPI