const VolumeController = ({ stop, name, power, volume, changeVolume, changeAudioGroup }) => (
  <div className="volumeController">
    <button id="bank-btn" onClick={changeAudioGroup}>Bank</button>
    <button
      id="power-btn"
      onClick={stop}
      >Turn {power ? 'OFF' : 'ON'}
    </button>
    <h2 id="connection">{power ? 'connected' : 'disconnected'}</h2>
    <h2 id="group-sound-name">{name}</h2>
    <h2 id="volume-header">Volume: {Math.round(volume * 100)}%</h2>
    <input
      id="volume-input"
      max="1"
      min="0"
      step='0.01'
      type="range"
      value={volume}
      onChange={changeVolume}
      />
  </div>
);

export default VolumeController