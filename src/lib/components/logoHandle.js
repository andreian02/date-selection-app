import water from '$lib/images/elements/water.svg'
import wood from '$lib/images/elements/wood.svg'
import fire from '$lib/images/elements/fire.svg'
import earth from '$lib/images/elements/earth.svg'
import metal from '$lib/images/elements/metal.svg'


export function logoHandle(dayElement){
    let source; 
    if (dayElement == "火") {
        source = fire
    } else if (dayElement == "土") {
        source = earth
    } else if (dayElement == "金") {
        source = metal
    } else if (dayElement == "水") {
        source = water
    } else if (dayElement == "木") {
        source = wood
    }

    return source
}


