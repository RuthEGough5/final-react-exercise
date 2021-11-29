//DELETED REACT APP 
// 6a BONUS
import { useState } from 'react'

//7a BONUS RETURN TO THIS...const [num, setNUM]
// import { useState } from 'react'

// 2a
import MCUShows from './mcu-shows/MCUShows'

// 5a Creative license...the months bugged me
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'Jun 2021',
  whatIf: 'Aug 2021',
  hawkeye: 'Nov 2021'
};

// 6b BONUS
const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
];

function App() {
  // 6c BONUS set to Zero/destructure
  const [index, setIndex] = useState(0);

  // 6f BONUS RANDOM MCU CHARACTER BUTTON
  const randomIndex = () => {
    const newIndex = Math.floor(Math.random() * 5);
    setIndex(newIndex);
  }

  return (
    <div>
      {/* 2b */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c MCUShows component & 5b dates prop added with release dates passing through "dates" */}
      <MCUShows dates={releaseDates} randomIndex={randomIndex} />
      {/* 6d BONUS */}
      <h1>Random MCU Character:</h1>
      {/* 6f BONUS */}
      <h1>{mcuCharacters[index]}</h1>
      {/* 7c BONUS RETURN TO THIS... */}
      <h1>NEXT MCU CHARACTER</h1>
      {/* 7d BONUS  RETURN TO THIS... NEEDS TO BEGIN WITH SCARLET WITCH */}
      <h1>{mcuCharacters[0]}</h1>
    </div>
  );
}

export default App;