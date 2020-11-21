import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName= this.updatePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.search=this.search.bind(this);
    this.state = {
      searchResults: [
        {
          name: 'Move Your Body',
          artist: 'Marshall Jefferson',
          album: 'House Music Anthem',
          id: 100
        },
        {
          name: 'Big Fun',
          artist: 'Inner City',
          album: 'Big Fun 12"',
          id: 200
        }
      ],
      playlistName: 'Playlist A',
      playlistTracks: [
        {
          name: 'Go DJ',
          artist: 'Lil Wayne',
          album: 'Tha Carter',
          id: 300
        },
        {
          name: 'Bring It Back',
          artist: 'Lil Wayne',
          album: 'Tha Carter',
          id: 400
        }
      ]
    }
  }

  addTrack(track) {
    let isInArray = false;
    for (let i=0;i<this.state.playlistTracks.length; i++) {
      if (isInArray) {

      } else {
        if (track.id===this.state.playlistTracks[i].id) {
          isInArray = true;
        }
      }
    }
    if (!isInArray) {
      let newArr = this.state.playlistTracks;
      newArr.push(track);
      this.setState({
        playlistTracks: newArr
      });
    }
  }

  removeTrack(track) {
    let indexOfTrack;
    for (let i=0;i<this.state.playlistTracks.length;i++) {
      if (track.id===this.state.playlistTracks[i].id) {
        indexOfTrack=i;
        
      }
      if (indexOfTrack!==undefined) {
        const tempArr = this.state.playlistTracks;
        tempArr.splice(indexOfTrack, 1);
        this.setState({
          playlistTracks: tempArr
        });
      }
    }
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  savePlaylist() {
    const trackURIs = [];
    console.log('save playlist');
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  componentDidUpdate() {
    // console.log('playlist tracks: ' + JSON.stringify(this.state.playlistTracks))
    // console.log(this.state.playlistName);
  }
  componentDidMount() {
    console.log('playlist tracks: ' + JSON.stringify(this.state.playlistTracks))
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar 
            onSearch={this.search}
          />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} 
            />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
