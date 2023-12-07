import './App.css';
import CountryList from "./components/country-list/CountryList.jsx";
import SearchCountry from "./components/search-country/SearchCountry.jsx";
import {Routes, Route} from "react-router-dom";
import Links from "./components/links/Links.jsx";
import Home from "./components/home/Home.jsx";


function App() {
    return (
        <>
            <Links/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*opdracht 1   */}
            {/*<CountryList/>*/}
                <Route path="/opdracht_1" element={<CountryList/>}/>
                {/*opdracht 2*/}
            {/*<SearchCountry/>*/}
                <Route path="/opdracht_2" element={<SearchCountry/>}/>

            </Routes>
        </>
    )
}

export default App
