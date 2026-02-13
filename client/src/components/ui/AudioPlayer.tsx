import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioPlayerProps {
  src: string;
  title: string;
  className?: string;
}

export function AudioPlayer({ src, title, className }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    // Events
    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('durationchange', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('durationchange', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn("w-full bg-neutral-900 border border-neutral-800 p-6 flex flex-col gap-4", className)}>
      <audio ref={audioRef} src={src} preload="metadata" />
      
      <div className="flex items-center justify-between">
        <h3 className="text-white font-display uppercase tracking-widest text-sm">{title}</h3>
        <span className="text-neutral-500 font-mono text-xs">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-neutral-200 transition-colors shrink-0"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-black fill-black" />
          ) : (
            <Play className="w-4 h-4 text-black fill-black ml-0.5" />
          )}
        </button>

        <div className="flex-1 h-8 flex items-center">
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
            />
        </div>

        <button onClick={toggleMute} className="text-neutral-500 hover:text-white transition-colors">
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
