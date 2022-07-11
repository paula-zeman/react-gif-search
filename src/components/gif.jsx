import React from 'react';

class Gif extends React.Component {
render() {
  const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
  return(
    <img src={src} alt="cat" className="gif" />
  );
}
}

export default Gif
