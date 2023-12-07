import './SearchCountry.css'
import {useState} from "react";
import axios from "axios";
import populations from "./helpers/population.js";
import countryBorders from "./helpers/countryBorders.js";
import spinning_globe from "../../assets/spinning_globe.gif"

function SearchCountry() {
    const [error, setError] = useState()
    const [countryName, setCountryName] = useState([])
    const [input, setInput] = useState('')


    async function searchCountries() {
        setError('')
        setCountryName([])
        try {
            const search = await axios.get(url)
            setCountryName(search.data)
        } catch (e) {
            setError(e)
        }
    }
const url = ('https://restcountries.com/v3.1/name/'+input)

    return (
        <>
            <div className="container">
                <div className="searchsbar">
                    <h1> search country information</h1>
                    <img src={spinning_globe} alt="spinning_globe"/>
                    <form name="searchfield" className="searchfield" >
                        <input placeholder="bijvoorbeeld Nederland of Duitsland" value={input}
                               onChange={(e) => setInput(e.target.value)}/>
                        <button id="searchButton" type="button" onClick={searchCountries}> zoek</button>
                    </form>
                </div>
                {error &&<p className="error">{input + " bestaat niet. Probeer het opnieuw"}</p>}
                <ul className="searchList">
                    {countryName.map((country) => {
                        return (
                            <>
                                <li key={country.name.common} className="searchInfo">
                                <div className="searchCountry">
                                    <img className="flags" src={country.flags.png} alt={country.name.common + "flag"}/>
                                    <h1>{country.name.common}</h1>
                                </div>
                                <p>{country.name.common} is situated in and the capital is {country.capital}</p>
                                <p>It has a population of {populations(country.population)} million people and it
                                    borders with {countryBorders(country.borders)} neighboring countries </p>
                                <p>Websites can be found on <strong>{country.tld}</strong> domain's</p>
                            </li>
                            </>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default SearchCountry