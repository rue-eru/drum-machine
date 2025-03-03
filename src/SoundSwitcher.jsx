import KeyBtns from "./KeyBtns";

const SoundSwitcher = ({ sounds, play, power, deactivateAudio }) =>  (
  <div className="drum-kit">
    {power 
      ? sounds.map((sound) => 
        <KeyBtns 
          keyTrigger={sound.id}
          sound={sound} 
          play={play} 
          deactivateAudio={deactivateAudio} 
        />)
      : sounds.map((sound) => 
        <KeyBtns 
          sound={{...sound, url: "#" }} 
          play={play} 
          deactivateAudio={deactivateAudio} 
        />)
    }
  </div>
);

export default SoundSwitcher