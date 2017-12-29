import React, { Component } from 'react';
import Moment from 'react-moment';


class DayWeather extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <p>City: {this.props.state.weatherData.city.name}</p>


      </div>
    )
  }
}

export default DayWeather;
