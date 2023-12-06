import countrycolors from "../helpers/countrycolors.js";

function CountryList(prop){
    return(
        <li className="countryInfo">
            <div className="flagAndCountry">
                <img className="flags" src={prop.countryFlag} alt={prop.countryName +"flag"}/>
                <p className={countrycolors(prop.countryRegion)}>{prop.countryName}</p>
            </div>
            <p>Has a population of {prop.countryPopulation} people</p>
        </li>
    )
}
export default CountryList