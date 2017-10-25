import React from 'react';
import PropTypes from 'prop-types';

class AlbumListItem extends React.Component {
  render() {
    const { album, id, clicked } = this.props;
    return (
      <div style={{ display: "flex", cursor: "pointer", border: "1px solid rgba(0,0,0,0.3)" }} onClick={e => clicked(e, id)}>
        <img src={album.cover} height={100} alt={`${album.title} cover`}/>
        <div style={{ paddingLeft: 10 }}>
          <h3>{album.title}</h3>
          <h4>{album.artist}</h4>
        </div>
      </div>
    );
  }
}

AlbumListItem.propTypes = {
  id: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired,
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  })
}

export default AlbumListItem;