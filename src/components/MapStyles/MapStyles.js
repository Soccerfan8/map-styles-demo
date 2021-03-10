import React from 'react'
import classes from './MapStyles.module.css'
import lightPreview from '../../assets/light-preview.png'
import darkPreview from '../../assets/dark-preview.png'
import satellitePreview from '../../assets/satellite-preview.png'
import streetPreview from '../../assets/street-preview.png'

const st = "mapbox://styles/mapbox/streets-v11"
const li = "mapbox://styles/mapbox/light-v10"
const da = "mapbox://styles/mapbox/dark-v10"
const sat = "mapbox://styles/mapbox/satellite-v9"

const mapStyles = props => {
    return (
        <div className={classes.MapStyles}>
            {/* <h4 style={{ "text-align": "center", "marginTop": "10px", "marginBottom": "5px" }}>Map Styles</h4> */}
            <button><img src={streetPreview} alt="street" onClick={() => props.changeStyle(st)} /></button>
            <button><img src={lightPreview} alt="light" onClick={() => props.changeStyle(li)} /></button>
            <button><img src={darkPreview} alt="dark" onClick={() => props.changeStyle(da)} /></button>
            <button><img src={satellitePreview} alt="satellite" onClick={() => props.changeStyle(sat)} /></button>
        </div>
    )
}


export default mapStyles;