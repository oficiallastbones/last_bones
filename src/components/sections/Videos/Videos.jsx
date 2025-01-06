import React from "react";
import styles from "./Videos.module.css";
import Title from "@/components/atoms/Title/Title";

function Videos() {
  return (
    
    <div className={styles.container}>
      <Title tag='conteúdo'></Title>
      <h1 className={styles.title}>VIDEOS E CONTEÚDOS</h1>
      <div className={styles.gallery}>
        <img
          src="/images/show/show_5.jpg"
          alt="Imagem 1"
          className={`${styles.image} ${styles.largeTall}`}
        />
        <img
          src="/images/banda/paisagem/banda_1.jpg"
          alt="Imagem 2"
          className={`${styles.image} ${styles.square}`}
        />
        <img
          src="/images/guitarrista/guitar_1.jpg"
          alt="Imagem 3"
          className={`${styles.image} ${styles.square}`}
        />
        <img
          src="/images/banda/paisagem/banda_8.jpg"
          alt="Imagem 4"
          className={`${styles.image} ${styles.wide}`}
        />
        <img
          src="/images/show/show_10.jpg"
          alt="Imagem 5"
          className={`${styles.image} ${styles.superWide}`}
        />
      </div>

      <div className={styles.youtubeSection}>
        <hr className={styles.divider} />
        <h2 className={styles.youtubeTitle}>SIGA-NOS NO YOUTUBE</h2>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/pN7cGMoyK4w"
            title="YouTube video player 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <hr className={styles.divider} />
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/VYGPVLiUZ3M"
            title="YouTube video player 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Videos;
