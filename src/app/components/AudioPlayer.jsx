'use client'

import { useState, useEffect } from "react";

const BASE_AUDIO_URL = 'https://media.merriam-webster.com/audio/prons/en/us/mp3';

const AudioPlayer = ({ entry }) => {
  const [subDir, setSubDir] = useState('');

  let entryAudio = entry?.hwi?.prs[0]?.sound?.audio;

  useEffect(() => {
    let newSubDir = '';

    if (/^[0-9]/.test(entryAudio)) {
      newSubDir = 'number';
    } else if (entryAudio.startsWith('gg')) {
      newSubDir = 'gg';
    } else if (entryAudio.startsWith('bix')) {
      newSubDir = 'bix';
    } else {
      newSubDir = entryAudio.charAt(0);
    }

    setSubDir(newSubDir);
  }, [entryAudio]);

  const audioUrl = `${BASE_AUDIO_URL}/${subDir}/${entryAudio}.mp3`;

  return (
    <>
      {entryAudio && (
        <button className='mt-4 bg-white border-2 border-neutral-900 rounded-md'>
          <audio controls
            src={audioUrl}
            className='w-44 h-8'
          />
        </button>
      )}
    </>
  );
};

export default AudioPlayer;