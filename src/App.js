import React, { Component } from 'react';

import './App.css';
import albumData from './data/albumData';
import AddAlbum from './components/AddAlbum';
import AlbumListItem from './components/AlbumListItem';
import AlbumDetail from './components/AlbumDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
    this.added = this.added.bind(this);

    this.state = {
      selectedAlbum: null,
      albumData
    };
  }

  clicked(e, id) {
    this.setState({ selectedAlbum: id });
  }

  added(data) {
    this.setState({ albumData: [...this.state.albumData, data]});
  }

  render() {
    return (
      <div className="App grid">
        <AddAlbum add={this.added}/>
        <div style={{}}>
          {this.state.albumData.map((album, idx) => (
            <AlbumListItem
              key={idx}
              id={idx}
              album={album}
              clicked={this.clicked}
            />
          ))}
        </div>
        <AlbumDetail album={this.state.albumData[this.state.selectedAlbum]}/>
      </div>
    );
  }
}

export default App;
