import React from 'react';

class Gif extends React.Component {


  render() {
    if(!this.props.id) {
      return null;
    }

    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} alt="cat" className="gif" onClick={() => this.props.selectGif(this.props.id)} />
    );
  }
}

export default Gif
