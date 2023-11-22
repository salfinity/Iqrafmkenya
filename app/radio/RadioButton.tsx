"use client"

import React, { useState, useRef, useEffect } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { FaRegStopCircle } from 'react-icons/fa';

function RadioButton() {
  const audioStreamUrl = "https://s42.myradiostream.com:34890///listen.mp3";

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioStreamUrl);
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
  
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset playback position
    } else {
      // Load the audio again to get the current live stream
      audioRef.current.load();
      audioRef.current.play();
    }
  
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <button
        onClick={togglePlay}
        className="text-white shadow-lg shadow-zinc-800 rounded-full font-bold text-6xl md:text-9xl
        absolute item-center focus:outline-none"
      >
        {isPlaying ? <FaRegStopCircle /> : <AiOutlinePlayCircle />}
      </button>
      <a className="group flex justify-center gap-1.5 mt-24 md:mt-40 ltr:sm:justify-start rtl:sm:justify-end">
          <span className="font-bold md:text-xl text-gray-100 transition group-hover:text-gray-300/75">Live radio</span>
           <span className="relative flex h-3 w-3">
             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
             <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
          </span>
       </a>
    </div>
  );
}

export default RadioButton;
