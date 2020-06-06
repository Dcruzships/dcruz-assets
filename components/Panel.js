import React from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Countdown from 'react-countdown';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      components: [
        `<Countdown date={'June 20, 2020 00:00:00'} onClick={handleClick} />`,
        "<div></div>"
      ]
    };
  }

  changePanel(up) {
    let current = this.state.num;

    if(up) {
      current++;
    }
    else {
      current--;
    }

    if(current < 0) current = this.state.components.length - 1;
    if(current > this.state.components.length - 1) current = 0;

    this.setState({num: current});

    console.log(current);
  }

  render()
  {
    let current = this.state.num;

    return (
      <div id="panel" className='centeredItems'>
        <FiChevronLeft className='controls' id='left' onClick={() => this.changePanel(false)}/>
        <div id="item">
          <Window num={current} />
        </div>
        <FiChevronRight  className='controls' id='right' onClick={() => this.changePanel(true)}/>
      </div>
    )
  }
}

function Window(props) {
  let panelNum = props.num;
  let panelObj = '';

  switch(panelNum) {
    case 0:
      panelObj = <Countdown date={'June 20, 2020 00:00:00'} />;
      break;
    case 1:
      panelObj = <Topics />;
      break;
    case 2:
      panelObj = <div>test2</div>;
      break;
    default:
      panelObj = <Countdown date={'June 20, 2020 00:00:00'} />;
  }

  return (
    <>
      {panelObj}
    </>
  );
}

function Topics(props)
{
  let mainTopics = [
    "Race",
    "Sexuality",
    "School",
    "Parents",
    "Medication",
    "Drugs / Alcohol",
    "Art",
    "Love",
    "Violence",
    "Self Worth",
    "Sex",
    "Friendship",
    "Purpose",
    "Wants / Needs",
    "Physicality",
    "Judgement",
    "Sense of Self",
    "Adulthood",
    "World",
    "Dreams",
    "Meditation"
  ];

  function handleClick()
  {
    let randNum = Math.round(Math.random() * mainTopics.length);
    let topicsBox = document.querySelector("#theTopic");
    if(randNum === mainTopics.length) randNum--;
    if(randNum === -1) {
      topicsBox.innerHTML = `<p>Done</p>`;
      return;
    }
    topicsBox.innerHTML = `<p>${mainTopics[randNum]}</p>`;
  }

  return (
    <div id="topics">
      <button onClick={handleClick}>Get Random Topic</button>
      <span id="theTopic" className="centeredItems"><p>No topic</p></span>
    </div>
  );
}

export default Panel;
