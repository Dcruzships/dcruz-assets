import React from 'react';
import CoolPlayer from 'react-cool-music-player';
import 'react-cool-music-player/dist/index.css';

class MusicPlayer extends React.Component
{
  constructor(props) {
    super(props);
    // Music data
    this.state = { songs:
    [
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/idk-demo.mp3',
        artist: 'Captain Brando!',
        name: 'idk / Now! (demo)',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/sailboat.png',
        id: '66575568423123',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/him.mp3',
        artist: 'Captain Brando!',
        name: 'Him',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/him.jpg',
        id: '66575568425354321',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/goodyou.mp3',
        artist: 'Captain Brando!',
        name: 'good, and you?',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/sailboat.png',
        id: '66575568423274',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bargainbin.mp3',
        artist: 'Captain Brando!',
        name: 'Bargain Bin',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bargainbin.png',
        id: '66575568425349835',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bbetc.mp3',
        artist: 'Captain Brando!',
        name: 'Better Better, etc.',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/bbetc.png',
        id: '66575568463795',
      },
      {
        src: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/paralyzed.mp3',
        artist: 'Captain Brando!',
        name: 'Paralyzed Paraplegic (instrumental)',
        img: 'https://raw.githubusercontent.com/dcruzships/40forty/master/assets/sailboat.png',
        id: '66575568425355568',
      },
    ]};
  }

  render()
  {
    return (
      <div className={'wrapper'}>
        <CoolPlayer data={this.state.songs} />
      </div>
    );
  }
}

export default MusicPlayer;
