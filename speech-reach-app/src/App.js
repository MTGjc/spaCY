import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

//only functional commands here:
const App = () => {
  const commands = [
    {
      command: "Start.",
      callback: ({resetTranscript}) => resetTranscript()
    },
    {
      command: 'open *',
      callback: (site) => {
        window.open('http://'+site)
      }
    },
    {
      //to trigger ue animation0;
      command: "Let's have sex.",
      callback: () => {
        document.body.style.background = "red"
      }
    }
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <button onClick={SpeechRecognition.startListening( {continuous:true, language: 'en-US'})}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default App;