import { useEffect } from "react";
import styles from "./Video.module.css";

const Video = () => {
	useEffect(() => {
		const loadInstagramEmbed = () => {
			if (window.instgrm) {
				window.instgrm.Embeds.process();
			}
		};

		// Adiciona o script do Instagram uma vez ao carregar o componente
		if (!document.getElementById("instagram-embed-script")) {
			const script = document.createElement("script");
			script.src = "https://www.instagram.com/embed.js";
			script.id = "instagram-embed-script";
			script.async = true;
			script.onload = loadInstagramEmbed;
			document.body.appendChild(script);
		} else {
			loadInstagramEmbed();
		}
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.videoWrapper}>
				<blockquote
					className="instagram-media"
					data-instgrm-permalink="https://www.instagram.com/p/DBxUvpVO2Sn/"
					data-instgrm-version="14"
				// style={{ maxWidth: "500px", margin: "0 auto" }}
				></blockquote>
			</div>
		</div>
	);
};

export default Video;
