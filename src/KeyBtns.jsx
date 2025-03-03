import { useEffect } from 'react'

{/*displays destructed sound objects into keys*/}
const KeyBtns = ({ play, deactivateAudio, sound: { id, keyTrigger, url, keyCode } }) => {

  useEffect(() => {
    document.addEventListener(
      'keydown',
      (e) => {
        if (keyCode === e.keyCode) {
          const audio = document.getElementById(keyTrigger);
          play(keyTrigger, id);
          deactivateAudio(audio)
        }
      }
    )
  }, []);

  return (
    <button
      value="test"
      className="drum-pad"
      id={keyCode}
      onClick={() => play(keyTrigger, id)}
    >
      <audio
        className="clip"
        id={keyTrigger}
        src={url}
      />
      {keyTrigger}
    </button>
  );
};

export default KeyBtns