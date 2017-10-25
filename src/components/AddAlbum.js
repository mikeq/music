import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

class AddAlbum extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.sendNew = this.sendNew.bind(this);

    this.state = {
      title: '',
      artist: '',
      description: '',
      cover: '',
    }
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  sendNew() {
    this.props.add(this.state);
  }

  render() {
    return (
      <form className="add-form" style={{ display: "grid", gridTemplateColumns: "minMax(200px, 250px) minMax(200px, 250px)", gridTemplateRows: "1fr 1fr" }} noValidate autoComplete="off">
        <TextField
          id="title"
          label="Title"
          value={this.state.title}
          onChange={this.handleChange}
          margin="normal"
          style={{ marginLeft: 10 }}
        />
        <TextField
          id="artist"
          label="Artist"
          value={this.state.artist}
          onChange={this.handleChange}
          margin="normal"
          style={{ marginLeft: 10 }}
        />
        <TextField
          id="cover"
          label="Cover"
          value={this.state.cover}
          onChange={this.handleChange}
          margin="normal"
          style={{ marginLeft: 10 }}
        />
        <TextField
          id="description"
          label="Description"
          value={this.state.description}
          onChange={this.handleChange}
          margin="normal"
          multiline
          rowsMax="4"
          style={{ marginLeft: 10 }}
        />
        <Button raised color="primary" onClick={this.sendNew}>Add</Button>
      </form>
    );
  }
}

AddAlbum.propTypes = {
  add: PropTypes.func.isRequired,
}

export default AddAlbum;