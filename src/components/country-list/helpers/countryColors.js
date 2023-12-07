function countryColors(region){
    let className =''
    switch (region){
        case "Africa":
            className = "Africa"
            break
        case "Americas":
            className = "Americas"
            break
        case "Asia":
            className = "Asia"
            break
        case "Europe":
            className = "Europe"
            break
        case "Oceania":
            className = "Oceania"
            break
        case "Antarctic":
            className = "Antarctic"
    }
    return className
}
export default countryColors