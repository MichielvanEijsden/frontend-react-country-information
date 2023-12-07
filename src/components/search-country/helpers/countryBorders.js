function countryBorders(borders) {
    let borderAmount = ''
    
    if (borders.length > 0) {
        borderAmount = borders.length
    }else
        borderAmount = "0"
    return borderAmount
}
export default countryBorders