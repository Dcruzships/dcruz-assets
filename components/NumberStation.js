import React from 'react';

class NumberStation extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      audio: null
    };
  }

  render()
  {
    return (
      <div className="App">
       <div className="controls">
         <button onClick={this.toggleMicrophone}>
           {this.state.audio ? 'Stop microphone' : 'Get microphone input'}
         </button>
       </div>
       {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}
     </div>
    );
  }
}

export default NumberStation;
