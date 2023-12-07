import {Link} from "react-router-dom";
import "./Links.css"

function Links(){

return(
    <>
    <ul className="link">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/opdracht_1">opdracht 1</Link></li>
        <li><Link to="/opdracht_2">opdracht 2</Link></li>

    </ul>
    </>
)
    }
    export default Links