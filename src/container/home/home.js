import React, { Component } from "react"
import "./home.css"
import Button from "../../component/button/button"
import Tiles from "../../component/tiles/tiles";
import Axios from 'axios';

class Home extends Component {
    state = {
        show:false,
        cityname:"",
        data:{},
        isCurrent:false
    }
    showTileCurrent=()=>{
        this.getCurrentData()  
    }
    showTileForecast=()=>{
        this.setState({isCurrent: false}) 
        this.getForecast()
    }
    changeHandler(e){
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state.cityname)
    }
    getCurrentData=()=>{
        // console.log("http://api.weatherapi.com/v1/current.json?key=74179a41cdc542d39a4151656201601&q="+this.state.cit)
        Axios.get("http://api.weatherapi.com/v1/current.json?key=74179a41cdc542d39a4151656201601&q="+this.state.cityname).then((data)=>{
            this.setState({data:data.data.current,show:true,isCurrent:!this.state.current})
        })
    }
    getForecast=()=>{
        Axios.get(`http://api.weatherapi.com/v1/forecast.json?key=74179a41cdc542d39a4151656201601&q=${this.state.cityname}&days=7`).then((data)=>{
            this.setState({data:data.data.forecast.forecastday,show:true})
           console.log(data.data.forecast);
        })
    }

    render() {
        return (
            <div>
            <h1 style={{borderBottom: "3px solid #fff"}}> Weather App</h1>
            <form>
                <fieldset>
                    <legend>
                        Enter your city:
            </legend>
                    <input type="text" placeholder="Enter your city: " onChange={this.changeHandler.bind(this)} value={this.state.cityname} name="cityname" />
                </fieldset>
            </form>
            <Button click={this.showTileCurrent} value="Current Weather"/>
            <Button click={this.showTileForecast} value="Check Forecast"/>
            {this.state.show ? <Tiles weatherData={this.state.data} isCurrent={this.state.isCurrent}/>:null}
        </div>
        )
    }
}
export default Home