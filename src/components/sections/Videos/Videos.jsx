// src/components/sections/Videos/Videos.jsx
import React from "react";
import styles from "./Videos.module.css";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/pN7cGMoyK4w",
    alt: "Video 1",
    type: "youtube",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/pN7cGMoyK4w",
    alt: "Video 2",
    type: "youtube",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/pN7cGMoyK4w",
    alt: "Video 3",
    type: "youtube",
  },
];

function Videos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>VIDEOS E CONTEÚDOS</h1>
      <div className={styles.gallery}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            {video.type === "youtube" ? (
              <iframe
                className={styles.video}
                title={video.alt}
                src={video.src}
                width="500"
                height="300"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={video.src}
                alt={video.alt}
                className={styles.videoThumbnail}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
