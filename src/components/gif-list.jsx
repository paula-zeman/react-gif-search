import React from 'react';
import Gif from './gif.jsx'


class GifList extends React.Component {
  renderList = () => {
    return this.props.gifs.map(gif => { return <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif}/>
    });
  }

  render() {
    return(
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList
