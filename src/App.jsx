import './App.css';
import {useState} from "react";
import axios from "axios";
import worldmap from './assets/world_map.png'
import CountryList from "./components/CountryList.jsx";


function App() {

    const [countryInfo, setCountryInfo] = useState([])
    const [error, setError] = useState()
    const [button,togglebutton] = useState(false)

    async function fetchCountries() {
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



    return (
        <>
        <div className="outercontainer">
            <div className="innercontainer">
                <img src={worldmap} alt="worldmap" id="worldmap"/>
                <h1 className="map-text">world Regions</h1>
                <div onClick={() => togglebutton(!button)} hidden={button}>
                <button type="button" onClick={fetchCountries}>click me</button>
                </div>
            </div>
                <ul className="countryList">
                    {countryInfo.map((country) => {
                        return (
                            <CountryList
                                key={country.name.common}
                                countryName={country.name.common}
                                countryFlag={country.flags.png}
                                countryRegion={country.region}
                                countryPopulation={country.population}
                            />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default App
