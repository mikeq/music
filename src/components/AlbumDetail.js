import React from 'react';
import PropTypes from 'prop-types';

const AlbumDetail = ({album}) => {
  if (!album) {
    return null;
  }

  const style = {
    background: `linear-gradient(0deg, rgba(0,0,0,0.5),rgba(0,0,0,1)), url(${album.cover}) 0 0 no-repeat`,
    backgroundSize: "cover",
    color: "#FFF",
    padding: 20,
  };

  return (
    <div style={style}>
      <h1>{album.title}</h1>
      <h3>{album.artist}</h3>
      <p>{album.description}</p>
    </div>
  );
}

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    description: PropTypes.string,
    cover: PropTypes.string,
  }),
}

export default AlbumDetail;