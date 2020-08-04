import React, { useState } from 'react';
import './App.css';
import useWindowSize from './useWindowSize'
function App() {
  const appName = "Shuffle and Sort";
  const creatorName = "Rakesh Saini";
  const boxArr = [
    {
      boxNumber: 1,
      color: '#6F98A8'
    },
    {
      boxNumber: 2,
      color: '#2B8EAD'
    },
    {
      boxNumber: 3,
      color: '#2F454E'
    },
    {
      boxNumber: 4,
      color: '#2B8EAD'
    },
    {
      boxNumber: 5,
      color: '#2F454E'
    },
    {
      boxNumber: 6,
      color: '#BFBFBF'
    },
    {
      boxNumber: 7,
      color: '#BFBFBF'
    },
    {
      boxNumber: 8,
      color: '#6F98A8'
    },
    {
      boxNumber: 9,
      color: '#2F454E'
    }
  ];
  const [boxData, setBoxData] = useState(boxArr);

  // attaching resize event
  const size = useWindowSize();

  // handleShuffle onclick on Shuffle button
  function handleShuffle() {
    const shuffleData = boxArr
      .map((a) => ({ sort: Math.random(), boxNumber: a.boxNumber, color: a.color }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => { return { boxNumber: a.boxNumber, color: a.color } });
    // set shuffleData to the boxData
    setBoxData(shuffleData);
  }
  // handleShuffle onclick on Sort button
  function handleSort() {
    const sortData = boxArr.sort(function (a, b) {
      return a.boxNumber - b.boxNumber;
    });
    // set sortData to the boxData
    setBoxData(sortData);
  }
  // keeping text hoisted
  document.title = appName;
  const creatorText = `Shuffle and Sort By ${creatorName}`;
  return (
    <div className="App">
      <div className="appName">{appName}</div>
      <div className="flex-container">
        <div className="main">
          {boxData.length === 9 &&
            boxData.map((val) => {
              const mobileWidth = size.width <= 375;

              return <div key={val.boxNumber} style={mobileWidth ? { 'border-left-color': val.color } : { 'backgroundColor': val.color }}>{val.boxNumber}</div>
            })
          }
        </div>
        <div className="side">
          <button onClick={handleShuffle}>Shuffle</button>
          <button onClick={handleSort}>Sort</button>
        </div>

      </div>
      <div className="creatorName">{creatorText}</div>
    </div>
  );
}

export default App;
