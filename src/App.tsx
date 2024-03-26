import React from 'react';
import './App.scss'; // Import the Sass file using require syntax

const App: React.FC = () => {
  const [currentSound, setCurrentSound] = React.useState<HTMLAudioElement | null>(null);

  const playSound = (soundFile: string) => {
    if (currentSound) {
      currentSound.pause(); // Pause the currently playing sound
    }

    const audio = new Audio(soundFile);
    audio.play();
    setCurrentSound(audio);
  };

  const pauseSound = () => {
    if (currentSound) {
      currentSound.pause();
    }
  };

  const stopSound = () => {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0; // Reset the sound to the beginning
    }
  };

  return (
    <div className="App">
      <h1>Sound Board</h1>
      <div className="button-container">
        <button type="button" onClick={() => playSound('sound_files/70938__guitarguy1985__police2.wav')}>Sound 1</button>
        <button type="button" onClick={() => playSound('sound_files/130034__maxdemianagl__meow_kitten.wav')}>Sound 2</button>
        <button type="button" onClick={() => playSound('sound_files/175409__kirbydx__wah-wah-sad-trombone.wav')}>Sound 3</button>
        <button type="button" onClick={() => playSound('sound_files/625497__abhisheky948__animal-dog-bark-08.wav')}>Sound 4</button>
      </div>
      <div className="control-buttons">
        <button type="button" onClick={pauseSound}>Pause</button>
        <button type="button" onClick={stopSound}>Stop</button>
      </div>
    </div>
  );
};

export default App;
