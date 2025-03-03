import { useState } from 'react'
import './App.css'
import VolumeController from './VolumeController';
import SoundSwitcher from './SoundSwitcher';
import Footer from './Footer';

const audioSoundsA = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  }, {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  }, {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  }, {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  }, {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  }, {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  }, {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  }, {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  }, {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }]

const audioSoundsB = [{
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  }, {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  }, {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  }, {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  }, {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  }, {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  }, {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  }, {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  }, {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }];

const audioSwitcher = {
    heaterKit: "Heater Kit",
    smoothPianoKit: "Smooth Piano Kit"
  };
  
const audioGroups = {
    heaterKit: audioSoundsA,
    smoothPianoKit: audioSoundsB
  };

function App() {
  const [audioType, setAudioType] = useState("heaterKit");
  const [audioName, setAudioName] = useState("");
  const [audio, setAudio] = useState(audioGroups[audioType]);
  const [volume, setVolume] = useState(1);
  const [power, setPower] = useState(true);

  {/*key styling DONT FORGET TO CHANGE THEM AFTER YOY FINISH*/}
  const pressedKey = (key) => {
    key.parentElement.style.backgroundColor = "#415a77"
    key.parentElement.style.color = "#e0e1dd"
  }
 
 const colorChangeTiming = (audio) => {
   setTimeout(() => {
     audio.parentElement.style.backgroundColor = "#1b263b"
     audio.parentElement.style.color = "#e0e1dd"
   }, 250)
 }

 {/*main actions*/}
 const playAudio = (key, sound) => {
  setAudioName(sound)
  const audio = document.getElementById(key);
  pressedKey(audio);
  audio.currentTime = 0;
  audio.play();
  colorChangeTiming(audio);
  }

  const switchAudioGroup = () => {
    setAudioName("")
    if(audioType === "heaterKit"){
      setAudioType("smoothPianoKit");
      setAudio(audioGroups.smoothPianoKit);
    } else {
      setAudioType("heaterKit");
      setAudio(audioGroups.heaterKit);
    }
  }

  const changeVolume = (e) => {
    setVolume(e.target.value)
  }

  const changeKeyVolume = () => {
    const audioes = audio.map(sound => document.getElementById(sound.keyTrigger));
    audioes.forEach(audio => {
      if(audio) {
        audio.volume = volume;
      }
    }) 
  }

  const turnOFF = () => {
    setPower(!power)
  }

  return (
    <>
      <div id='drum-machine'>
        {changeKeyVolume()}
        <div id="display">
          <SoundSwitcher 
            sounds={audio} 
            play={playAudio} 
            power={power} 
            deactivateAudio={colorChangeTiming} 
          />
          <VolumeController 
            stop={turnOFF}
            power={power}
            volume={volume} 
            name={audioName || audioSwitcher[audioType]} 
            changeAudioGroup={switchAudioGroup}
            changeVolume={changeVolume} 
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
