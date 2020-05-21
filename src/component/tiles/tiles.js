import React from "react"
import Tile from "./tile/tile"

const tiles = (props)=>{
    //props.iscurret
    console.log(props.weatherData)
     
    let data;
    if(props.isCurrent)
    {
        const createObj={
            Temperature:props.weatherData.temp_c,
            TemperatureF:props.weatherData.temp_f,
            Wind_Speed:props.weatherData.wind_mph,
            Humidity:props.weatherData.humidity,
            Precipitation:props.weatherData.precip_in,
            Visibility:props.weatherData.vis_miles,
            Status:props.weatherData.condition.text
        }
        data=<Tile passedData={createObj} icon={props.weatherData.condition.icon}/>
    }
    else{
        data=props.weatherData.map((each,i)=>{
            const forecastObj={
                Date:each.date,
                Maxtemp:each.day.maxtemp_f,
                Avgtemp:each.day.avgtemp_f,
                Mintemp:each.day.mintemp_f,
                Avghumidity:each.day.avghumidity,
                Precipitation:each.day.precip_in,
                Status:each.day.condition.text
        
            }
            return <Tile passedData={forecastObj} icon={props.weatherData[i].day.condition.icon}/>
        })
    }
    return(
        <div className="Tiles">
            {data}
            
        </div>
    )
}
export default tiles