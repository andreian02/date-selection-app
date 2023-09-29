export function logoHandle(dayElement){
    let source; 
    if (dayElement == "火") {
        source = "https://charbase.com/images/glyph/12939"
    } else if (dayElement == "土") {
        source = "https://charbase.com/images/glyph/12943"
    } else if (dayElement == "金") {
        source = "https://charbase.com/images/glyph/12942"
    } else if (dayElement == "水") {
        source = "https://charbase.com/images/glyph/12940"
    } else if (dayElement == "木") {
        source = "https://charbase.com/images/glyph/12941"
    }

    return source
}