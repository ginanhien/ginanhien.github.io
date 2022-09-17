// src/components/academic/Academic.js

import React from "react";
import "./Headline.css";
import scienceGif from "../../assets/science.gif";
import bottleGif from "../../assets/bottle.gif";
import beakerGif from "../../assets/beaker.gif";
import creamGif from "../../assets/cream.gif";
export default function Headline() {
  return (
    <>
      <div class="headline-container">
        <div class="science-gif">
          <img src={scienceGif} alt="myGif" />
        </div>

        <fieldset>
          <legend>
            <h1>I'm just getting started!</h1>
          </legend>
        </fieldset>
        <div class="science-gif">
          <img src={bottleGif} alt="myGif" />
        </div>
        <div class="science-gif">
          <img src={beakerGif} alt="myGif" />
        </div>
        <div class="science-gif">
          <img src={creamGif} alt="myGif" />
        </div>
      </div>
    </>
  );
}
