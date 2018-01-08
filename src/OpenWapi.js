import React, { Component } from 'react';
import Moment from 'react-moment';

import RandomGif from './RandomGif.js';

const urlForCity = city => `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=1fba7c3eaa869008374898c6a606fe3e`

class OpenWapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false,
      shown: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    fetch(urlForCity(this.props.city))
      .then(response => {
        if(!response.ok) {
          throw Error("Network request failed")
        }
        return response;
      })
      .then(data => data.json())
      .then(data => {
        this.setState({
          weatherData: data
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  toggle(panelNumber) {
		this.setState({
			shown: {
        shown: false,
        [panelNumber]: !this.state.shown[panelNumber]
      }

		});
	}


  render() {

    if(this.state.requestFailed) return <div className="weather-preloader">Request Failed.</div>;
    if(!this.state.weatherData) return <div className="weather-preloader requesting">Requesting God for weather forecast...</div>;

    const coiso = this.state.weatherData.list.map( x => x.weather.map(z => z.description));
    console.log(
      coiso
    )

    return (
      <div>

        <div className="location">
          <svg class="svg-icon-location" viewBox="0 0 20 20">
            <path fill="none" d="M10.292,4.229c-1.487,0-2.691,1.205-2.691,2.691s1.205,2.691,2.691,2.691s2.69-1.205,2.69-2.691
              S11.779,4.229,10.292,4.229z M10.292,8.535c-0.892,0-1.615-0.723-1.615-1.615S9.4,5.306,10.292,5.306
              c0.891,0,1.614,0.722,1.614,1.614S11.184,8.535,10.292,8.535z M10.292,1C6.725,1,3.834,3.892,3.834,7.458
              c0,3.567,6.458,10.764,6.458,10.764s6.458-7.196,6.458-10.764C16.75,3.892,13.859,1,10.292,1z M4.91,7.525
              c0-3.009,2.41-5.449,5.382-5.449c2.971,0,5.381,2.44,5.381,5.449s-5.381,9.082-5.381,9.082S4.91,10.535,4.91,7.525z"></path>
          </svg>
          <span className="city-weather">{this.state.weatherData.city.name}</span>
        </div>






        {/* Day 1 */}
        <div onClick={() => this.toggle(1)} className="dayWeekItem">
          <div className="top-content">
            <div className={"icon-weather " + this.state.weatherData.list[0].weather[0].main}></div>
            <div className="date">
              <div className="weekday">Today</div>
              <div className="day-long"><Moment unix format="MMM DD YYYY">{this.state.weatherData.list[0].dt}</Moment></div>
              <div className="weather-description">{this.state.weatherData.list[0].weather[0].description}</div>
            </div>
            <div className="temperature">
              <div className="temp-high">{parseInt(this.state.weatherData.list[0].temp.max)}º</div>
              <div className="temp-low">{parseInt(this.state.weatherData.list[0].temp.min)}º</div>
            </div>
          </div>
          <div className={this.state.shown[1] ? "toggleContent-open" : "toggleContent-closed"} >
            <div className="weather-gif" >
              <RandomGif keyword={"fail " + this.state.weatherData.list[0].weather[0].main} />
            </div>
          </div>
        </div>



        {/* Day 2 */}
        <div onClick={() => this.toggle(2)} className="dayWeekItem">
          <div className="top-content">
            <div className={"icon-weather " + this.state.weatherData.list[1].weather[0].main}></div>
            <div className="date">
              <div className="weekday">Tomorrow</div>
              <div className="day-long"><Moment unix format="MMM DD YYYY">{this.state.weatherData.list[1].dt}</Moment></div>
              <div className="weather-description">{this.state.weatherData.list[1].weather[0].description}</div>
            </div>
            <div className="temperature">
              <div className="temp-high">{parseInt(this.state.weatherData.list[1].temp.max)}º</div>
              <div className="temp-low">{parseInt(this.state.weatherData.list[1].temp.min)}º</div>
            </div>
          </div>
          <div className={this.state.shown[2] ? "toggleContent-open" : "toggleContent-closed"} >
            <div className="weather-gif" >
              <RandomGif keyword={"fail " +this.state.weatherData.list[1].weather[0].main} />
            </div>
          </div>
        </div>

        {/* Day 3 */}
        <div onClick={() => this.toggle(3)} className="dayWeekItem">
          <div className="top-content">
            <div className={"icon-weather " + this.state.weatherData.list[2].weather[0].main}></div>
            <div className="date">
              <div className="weekday"><Moment unix format="ddd">{this.state.weatherData.list[2].dt}</Moment></div>
              <div className="day-long"><Moment unix format="MMM DD YYYY">{this.state.weatherData.list[2].dt}</Moment></div>
              <div className="weather-description">{this.state.weatherData.list[2].weather[0].description}</div>
            </div>
            <div className="temperature">
              <div className="temp-high">{parseInt(this.state.weatherData.list[2].temp.max)}º</div>
              <div className="temp-low">{parseInt(this.state.weatherData.list[2].temp.min)}º</div>
            </div>
          </div>
          <div className={this.state.shown[3] ? "toggleContent-open" : "toggleContent-closed"} >
            <div className="weather-gif" >
              <RandomGif keyword={"fail " + this.state.weatherData.list[2].weather[0].main} />
            </div>
          </div>
        </div>

        {/* Day 4 */}
        <div onClick={() => this.toggle(4)} className="dayWeekItem">
          <div className="top-content">
            <div className={"icon-weather " + this.state.weatherData.list[3].weather[0].main}></div>
            <div className="date">
              <div className="weekday"><Moment unix format="ddd">{this.state.weatherData.list[3].dt}</Moment></div>
              <div className="day-long"><Moment unix format="MMM DD YYYY">{this.state.weatherData.list[3].dt}</Moment></div>
              <div className="weather-description">{this.state.weatherData.list[3].weather[0].description}</div>
            </div>
            <div className="temperature">
              <div className="temp-high">{parseInt(this.state.weatherData.list[3].temp.max)}º</div>
              <div className="temp-low">{parseInt(this.state.weatherData.list[3].temp.min)}º</div>
            </div>
          </div>
          <div className={this.state.shown[4] ? "toggleContent-open" : "toggleContent-closed"} >
            <div className="weather-gif" >
              <RandomGif keyword={"fail " + this.state.weatherData.list[3].weather[0].main} />
            </div>
          </div>
        </div>

        {/* Day 5 */}
        <div onClick={() => this.toggle(5)} className="dayWeekItem">
          <div className="top-content">
            <div className={"icon-weather " + this.state.weatherData.list[4].weather[0].main}></div>
            <div className="date">
              <div className="weekday"><Moment unix format="ddd">{this.state.weatherData.list[4].dt}</Moment></div>
              <div className="day-long"><Moment unix format="MMM DD YYYY">{this.state.weatherData.list[4].dt}</Moment></div>
              <div className="weather-description">{this.state.weatherData.list[4].weather[0].description}</div>
            </div>
            <div className="temperature">
              <div className="temp-high">{parseInt(this.state.weatherData.list[4].temp.max)}º</div>
              <div className="temp-low">{parseInt(this.state.weatherData.list[4].temp.min)}º</div>
            </div>
          </div>
          <div className={this.state.shown[5] ? "toggleContent-open" : "toggleContent-closed"} >
            <div className="weather-gif" >
              <RandomGif keyword={"fail " + this.state.weatherData.list[4].weather[0].main} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default OpenWapi;
