

function countrycolors(region){
    let className
    switch (region){

        case "Africa":
            className= "blue"
            break
        case "Americas":
            className = "green"
            break
        case "Asia":
            className = "red"
            break
        case "Europe":
            className = 'yellow'
            break
        case "Oceania":
            className= "purple"
    }

    return className
}
export default countrycolors