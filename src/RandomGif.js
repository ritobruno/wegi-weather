import React, { Component } from 'react';

const giphyApiKey = "nilR61zVd28tomlze4vEilvRnSD2w7IV";


class RandomGif extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageSrc: ''
    }
    this.loadImage = this.loadImage.bind(this);
  }

  componentDidMount() {
    this.loadImage();
  }

  loadImage() {
    let url = `https://api.giphy.com/v1/gifs/random?tag=${this.props.keyword}&api_key=${giphyApiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(res => this.setState({ imageSrc: res.data.fixed_height_downsampled_url}))
      .catch((res) => {
        console.log('ERROR: No image from API!');
      });
  }

  render() {
    return(
      <div className='randomGif'>
        <img onClick={this.loadImage} className="randomGifImg" src={this.state.imageSrc} />
        <p className="weather-description">{this.props.keyword}</p>
      </div>
    );
  }
}

export default RandomGif;
//ReactDOM.render(<RandomGif keyword={SEARCH_KEY} />, document.getElementById('card'));
