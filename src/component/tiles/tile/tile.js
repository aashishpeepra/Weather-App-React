import React from "react"
import "./tile.css"
const tile = (props)=> {
    const toUSe={
        ...props.passedData
    }
    console.log(Object.keys(toUSe))
    return(
        <div className="Tile">
            <div className="heading">
            <h1>{toUSe.Status}</h1>
                <div className="imgFolder">
                    <img src={props.icon} alt="Your browser sucks "/>
                </div>
               
            </div>
            {
                Object.keys(toUSe).map(each=>{
                    return <div key={each}>{each +" : "+toUSe[each] }
                    </div>
                })
            }
          
            

        </div>
    )
}
export default tile;
