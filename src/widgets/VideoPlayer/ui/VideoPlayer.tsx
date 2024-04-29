'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '@/widgets/VideoPlayer/ui/VideoPlayer.module.scss';
import stopIconSrc from '@/widgets/VideoPlayer/assets/stop-svgrepo-com.svg';
import playIconSrc from '@/widgets/VideoPlayer/assets/play-svgrepo-com.svg';
import pauseIconSrc from '@/widgets/VideoPlayer/assets/pause-svgrepo-com.svg';
import muteIconSrc from '@/widgets/VideoPlayer/assets/mute-svgrepo-com.svg';
import volumeIconSrc from '@/widgets/VideoPlayer/assets/volume-up-svgrepo-com.svg';
import compressIconSrc from '@/widgets/VideoPlayer/assets/compress-wide-svgrepo-com.svg';
import expandIconSrc from '@/widgets/VideoPlayer/assets/expand-wide-svgrepo-com.svg';

export type VideoPlayerPorpsType = {
  video: string;
  videoThumb: string;
};

export function VideoPlayer({ video, videoThumb }: VideoPlayerPorpsType) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [useNativeControls, setUseNativeControls] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setUseNativeControls(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const updateProgress = () => {
    if (videoRef.current) {
      const value = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(value);
    }
  };

  const startProgressLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      updateProgress();
    }, 1000);
  };

  const stopProgressLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        startProgressLoop();
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        stopProgressLoop();
      }
    }
  };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    const seekTo = (Number(event.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTo;

    setProgress(Number(event.target.value));
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    const currentVolume = videoRef.current.volume;

    if (currentVolume > 0) {
      videoRef.current.volume = 0;
      setVolume(0);
      setIsMuted(true);
    } else {
      videoRef.current.volume = 1;
      setVolume(1);
      setIsMuted(false);
    }
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;

    const newVolume = Number(event.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleFullScreen = () => {
    if (!videoRef.current) return;

    if (!isFullScreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }

    setIsFullScreen(!isFullScreen);
  };

  document.addEventListener('fullscreenchange', () => {
    setIsFullScreen(!!document.fullscreenElement);
  });

  useEffect(() => {
    const handleFullScreenChange = () => setIsFullScreen(!!document.fullscreenElement);

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  useEffect(() => {
    const currentVideo = videoRef.current;

    const handleVideoEnd = () => {
      setIsPlaying(false);
      setProgress(0);
      stopProgressLoop();
    };

    if (currentVideo) {
      currentVideo.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener('ended', handleVideoEnd);
      }

      stopProgressLoop();
    };
  }, []);

  const renderedCustomControlls = () => {
    return (
      <>
        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <Image src={pauseIconSrc} alt="pauseIconSrc" />
          ) : (
            <Image src={playIconSrc} alt="playIconSrc" />
          )}
        </button>
        <button onClick={stopVideo}>
          <Image src={stopIconSrc} alt="stopIconSrc" />
        </button>
        <input type="range" min="0" max="100" value={progress} onChange={handleSeek} />
        <button onClick={toggleMute}>
          {isMuted ? (
            <Image src={muteIconSrc} alt="muteIconSrc" />
          ) : (
            <Image src={volumeIconSrc} alt="volumeIconSrc" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
        />
        compressIconSrc expandIconSrc
        <button onClick={toggleFullScreen}>
          {isFullScreen ? (
            <Image src={compressIconSrc} alt="compressIconSrc" />
          ) : (
            <Image src={expandIconSrc} alt="expandIconSrc" />
          )}
        </button>
      </>
    );
  };

  return (
    <div className={styles.videoPlayer}>
      <video
        src={video}
        ref={videoRef}
        poster={videoThumb}
        onClick={togglePlayPause}
        onPlay={startProgressLoop}
        onPause={stopProgressLoop}
        controls={useNativeControls}
      />
      {!useNativeControls && renderedCustomControlls()}
    </div>
  );
}
