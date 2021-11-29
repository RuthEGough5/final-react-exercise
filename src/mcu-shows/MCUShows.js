// 1a Import the MCUShows.css file
import './MCUShows.css'

// 1b function component
const MCUShows = ({ dates, randomIndex }) => {
  // 6f
  const getAvenger = () => randomIndex();
  // 1c
  return (
    // 4a
    <div className='MCUShows'>
      {/* 3a Set font and Underline to h1*/}
      <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
      <h2>Upcoming MCU Show Release Dates</h2>
      <p>WandaVision: {dates.wandaVision}</p>
      <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
      <p>Loki: {dates.loki}</p>
      <p>What If: {dates.whatIf}</p>
      <p>Hawkeye: {dates.hawkeye}</p>
      {/* 6e */}
      <button onClick={getAvenger}>RANDOM MCU CHARACTER</button>
    </div>
  );
}

// 1d
export default MCUShows;