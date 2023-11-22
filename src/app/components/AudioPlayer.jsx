'use client'

import { useState, useEffect } from "react";
import AudioButton from "./ui/AudioButton";

const BASE_AUDIO_URL = 'https://media.merriam-webster.com/audio/prons/en/us/mp3';

const AudioPlayer = ({ entry, id }) => {
  const [subDir, setSubDir] = useState('');

  let entryAudio = entry?.hwi?.prs[0]?.sound?.audio;

  useEffect(() => {
    let newSubDir = '';
    try {
      if (entryAudio && /^[0-9]/.test(entryAudio)) {
        newSubDir = 'number';
      } else if (entryAudio.startsWith('gg')) {
        newSubDir = 'gg';
      } else if (entryAudio.startsWith('bix')) {
        newSubDir = 'bix';
      } else {
        newSubDir = entryAudio.charAt(0);
      }

      setSubDir(newSubDir);
    } catch (error) {
      console.log("error:", error.message)
    }
  }, [entryAudio]);

  const audioUrl = `${BASE_AUDIO_URL}/${subDir}/${entryAudio}.mp3`;

  const audio = document.getElementById('pronunciation-audio');
  const play = document.getElementById('play');

  function playAudio() {
    audio.play();
  }

  return (
    <>
      {entryAudio && (
        <div className='mt-2 mb-3'>
          <audio id='pronunciation-audio'
            src={audioUrl}>
          </audio>
          <button onClick={playAudio}><AudioButton /></button>
        </div>
      )}
    </>
  );
};

export default AudioPlayer;