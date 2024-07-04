/**
 * Import React and CSS
 */
import React from "react";
import "../css/ShopPage.css";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import audioFile from "../musics/yeatBeingRealSlowedReverb.mp3";

const ShopPage: React.FC = () => {
  return (
    <div className="shop-page">
      <AudioPlayer className="audio-player" src={audioFile} />
      <div className="shop-page-explanation">
        <p>
          Découvrez FAH, une marque de vêtements qui fusionne l'énergie
          audacieuse du style Y2K avec la sophistication moderne. Chaque pièce
          est méticuleusement conçue par trois jeunes créateurs venus d'horizons
          variés, unis par une passion commune : la mode. FAH incarne l'esprit
          d'innovation et de diversité, offrant des collections uniques qui
          défient les tendances et célèbrent l'individualité.
        </p>
      </div>
    </div>
  );
};

export default ShopPage;
