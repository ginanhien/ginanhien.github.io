// src/components/academic/Academic.js

import React from "react";
import "./Headline.css";
import scienceGif from "../../assets/science.gif";
import bottleGif from "../../assets/bottle.gif";
import beakerGif from "../../assets/beaker.gif";
import creamGif from "../../assets/cream.gif";
import lipstickGit from "../../assets/lipstick.gif";
import nailPolishGif from "../../assets/nail-polish.gif";
export default function Headline() {
  return (
    <>
      <div class="headline-container">
        <div class="upper-gif-container">
          <div class="gif science-gif">
            <img src={scienceGif} alt="myGif" />
          </div>
          <div class="gif beaker-gif">
            <img src={beakerGif} alt="myGif" />
          </div>
        </div>

        <fieldset>
          <legend>
            <h1>I'm just getting started!</h1>
          </legend>
        </fieldset>
        <div class="middle-gif-container">
          <div class="gif bottle-gif">
            <img src={bottleGif} alt="myGif" />
          </div>

          <div class="gif cream-gif">
            <img src={creamGif} alt="myGif" />
          </div>
        </div>

        <div class="science-gif">
          <img src={lipstickGit} alt="myGif" />
        </div>
        <div class="science-gif">
          <img src={nailPolishGif} alt="myGif" />
        </div>
      </div>
    </>
  );
}
