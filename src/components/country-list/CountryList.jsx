import './CountryList.css'
import worldmap from "../../assets/world_map.png";
import axios from "axios";
import {useState} from "react";
import countryColors from "./helpers/countryColors.js";

function CountryList() {
    const [countryInfo, setCountryInfo] = useState([])
    const [error, setError] = useState()
    const [button, toggleButton] = useState(false)
    async function fetchCountries() {
        setError('')
        try {
            const result = await axios.get('https://restcountries.com/v3.1/all')

            setCountryInfo(result.data)

            const countryInfo = result.data
            countryInfo.sort((a, b) => {
                return a.population - b.population
            })
        } catch (e) {
            setError(e)
            console.error(error)
        }
    }
    return(
        <div className="container">
            <img src={worldmap} alt="worldmap" id="worldmap"/>
            <h1 className="map-text">world Regions</h1>
            <div onClick={() => toggleButton(!button)} hidden={button}>
                <button type="button" onClick={fetchCountries}>click me</button>
            </div>
            {error &&<p className="error">{error.response.status + " controleer de spelling of probeer het later nog eens"}</p>}
        <ul className="countryList">
            {countryInfo.map((country) => {
                return (
                    <li  key={country.name.common} className="countryInfo">
                        <div className="flagAndCountry">
                            <img className="flags" src={country.flags.png} alt={country.name.common + "flag"}/>
                            <h2 className={countryColors(country.region)}>{country.name.common}</h2>
                        </div>
                        <p>Has a population of {country.population} people</p>
                    </li>
                )
            })}
        </ul>
        </div>
)
}

export default CountryList