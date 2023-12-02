"use client";

import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaRegStopCircle } from "react-icons/fa";
import TimeComponent from "../TimeComponent";

function RadioButton() {
  const audioStreamUrl = "https://s42.myradiostream.com:34890///listen.mp3";

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioStreamUrl);
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
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
    <div className="flex items-center justify-center h-screen w-screen gap-16">
      <button
        onClick={togglePlay}
        className="text-white shadow-lg shadow-zinc-800 rounded-full font-bold text-6xl md:text-9xl
        absolute item-center focus:outline-none"
      >
        {isPlaying ? <FaRegStopCircle /> : <AiOutlinePlayCircle />}
      </button>
      <a
        className="group flex justify-center items-center gap-1.5 mt-28 md:mt-40  
       bg-slate-700/80 py-3 px-4 h-10 rounded-full shadow-xl shadow-zinc-900"
      >
        <TimeComponent timeZone="Africa/Nairobi" />
      </a>
    </div>
  );
}

export default RadioButton;
