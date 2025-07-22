// components/Hero/BackgroundVideo.tsx
"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function BackgroundVideo({ onLoop }: { onLoop: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      onLoop();
      video.play(); // Replay the video manually to simulate looping
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [onLoop]);

  return (
    <video
      ref={videoRef}
      className={styles.video}
      autoPlay
      muted
      playsInline
    >
      <source src="/hero-bg.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
}
