'use client'

import { useState, useEffect } from "react";

const BASE_AUDIO_URL = 'https://media.merriam-webster.com/audio/prons/en/us/mp3'

const AudioPlayer = ({ entry }) => {
  const [subDir, setSubDir] = useState('');

  let entryAudio = entry?.hwi?.prs[0]?.sound?.audio
  useEffect(() => {
    if (Array.isArray(entryAudio) && entryAudio.length > 0) {
      if (/^[0-9]/.test(entryAudio)) {
        setSubDir('number');
      } else if (entryAudio.startsWith('gg')) {
        setSubDir('gg');
      } else if (entryAudio.startsWith('bix')) {
        setSubDir('bix');
      } else {
        setSubDir(entryAudio.charAt(0));
      }
    }
  }, [entryAudio])

  return (
    <>
      {entryAudio && (
        <button className='mt-4 bg-white border-2 border-neutral-900 rounded-md'>
          <audio controls
            src={`${BASE_AUDIO_URL}/${subDir}/${entryAudio}.mp3`}
            className='w-44 h-8'
          />
        </button>
      )}
    </>
  );
};

export default AudioPlayer;