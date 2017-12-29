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

    if(this.state.requestFailed) return <p>Request Failed.</p>;
    if(!this.state.weatherData) return <p>Loading...</p>;


{/*
    const hidden = {
			display: this.state.shown ? "block" : "none"
    }

*/}

    return (
      <div>
        <p>City: {this.state.weatherData.city.name}</p>

        {/* Day 1 */}
        <div onClick={() => this.toggle(1)} className="dayWeekItem">
          <div className="top-content">
            <div className="icon-weather"></div>
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
              <RandomGif keyword={this.state.weatherData.list[0].weather[0].description} />
            </div>
          </div>
        </div>



        {/* Day 2 */}
        <div onClick={() => this.toggle(2)} className="dayWeekItem">
          <div className="top-content">
            <div className="icon-weather"></div>
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
              <RandomGif keyword={this.state.weatherData.list[1].weather[0].description} />
            </div>
          </div>
        </div>

        {/* Day 3 */}
        <div onClick={() => this.toggle(3)} className="dayWeekItem">
          <div className="top-content">
            <div className="icon-weather"></div>
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
              <RandomGif keyword={this.state.weatherData.list[2].weather[0].description} />
            </div>
          </div>
        </div>

        {/* Day 4 */}
        <div onClick={() => this.toggle(4)} className="dayWeekItem">
          <div className="top-content">
            <div className="icon-weather"></div>
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
              <RandomGif keyword={this.state.weatherData.list[3].weather[0].description} />
            </div>
          </div>
        </div>

        {/* Day 5 */}
        <div onClick={() => this.toggle(5)} className="dayWeekItem">
          <div className="top-content">
            <div className="icon-weather"></div>
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
              <RandomGif keyword={this.state.weatherData.list[4].weather[0].description} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default OpenWapi;
