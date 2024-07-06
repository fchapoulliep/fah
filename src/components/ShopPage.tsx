/**
 * Import React and CSS
 */
import React, { useEffect } from "react";
import "../css/ShopPage.css";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import audioFile from "../musics/yeatBeingRealSlowedReverb.mp3";

const ShopPage: React.FC = () => {
  const refHistory = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "FAH";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    observer.observe(refHistory.current as Element);
  });

  return (
    <div className="shop-page">
      <AudioPlayer className="audio-player" src={audioFile} />
      <div className="shop-page-header-picture">
        <p>
          <strong>FAH - Collection 2024</strong>
        </p>
      </div>
      <div className="shop-page-redirections">
        <div className="shop-page-redirection women">
          <p>ALLER À LA MODE</p>
          <h2>FEMME</h2>
        </div>
        <div className="shop-page-redirection men">
          <p>ALLER À LA MODE</p>
          <h2>HOMME</h2>
        </div>
        <div className="shop-page-redirection unisex">
          <p>ALLER À LA MODE</p>
          <h2>UNISEXE</h2>
        </div>
      </div>

      <div className="shop-page-footer-quote">
        <p>
          Le meilleur défilé de mode est dans la rue. Ça l'a toujours été et le
          sera toujours. - Bill Cunningham
        </p>
      </div>

      <div className="shop-page-history" ref={refHistory}></div>
    </div>
  );
};

export default ShopPage;
