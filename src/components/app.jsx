import React from 'react';
import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx'
import GifList from './gif-list.jsx'
import giphy from 'giphy-api'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: null
    }
  }

  search = (query) => {
    giphy(process.env.REACT_APP_API_KEY).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      })

    });
  }

  handleClickOnGif = (id) => {
    this.setState({selectedGifId: id});
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.handleClickOnGif}/>
        </div>
      </div>
      );
  }
}
export default App;
