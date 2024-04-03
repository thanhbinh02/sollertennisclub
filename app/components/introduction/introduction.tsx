"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";

const Introduction = () => {
  //video path
  let videoSrc = "/videos/video-tennis-club.mp4";

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow && (
        <div className={styles.main}>
          <div className={styles.overlay}></div>
          <video src="/videos/video-tennis-club.mp4" autoPlay loop muted />
          <div className={styles.image}>
            <Image
              src="/soller-tennis-club.svg"
              width={600}
              height={350}
              alt="Soller-tennis-club"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Introduction;
