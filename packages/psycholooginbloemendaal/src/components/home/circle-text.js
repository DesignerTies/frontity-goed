import connect from "@frontity/connect";
import React, { Component } from "react";

const RoundedDiv = () => {
  return (
    <div className="rounded-div">
      <img
        src="https://live.staticflickr.com/65535/51772859944_88de55233a_c.jpg"
        alt="over-mij-preview"
        className="foto-over-mij"
      />
      <div className="text-wrap">
        <h1>WELKOM</h1>
        <h2>Ik help je graag</h2>
        <p>
          Als psycholoog wil ik mensen meer vrijheid laten ervaren beter leren
          omgaan met emoties. Allemaal komen we soms op een punt in ons leven
          waar je niet meer weet hoe het verder moet. Al in een paar gesprekken
          kun je weer richting vinden en houvast. Daarbij werk ik volgens het
          biopsychosociale model, waarbij aanleg (kwetsbaarheid), de eigen
          unieke levenservaringen en de huidige context waarin je nu leeft een
          rol spelen in de therapie. Ik ben vooral een menselijke psycholoog met
          een voorliefde voor positieve psychologie. Building what is strong in
          plaats van fixing what is wrong. Wat niet wil zeggen dat er niet
          zelden sprake is van onderliggend trauma wat aandacht behoeft voor je
          weer verder kunt bouwen aan wat er goed gaat. Daarvoor maak ik gebruik
          van evidence based behandelingen zoals CGT (Cognitieve Gedrags
          Therapie) en van Tapping, ook wel EFT genoemd (Emotional Freedom
          Technique), een effectieve methode om negatieve emoties te verwerken.{" "}
        </p>
      </div>
    </div>
  );
};

export default connect(RoundedDiv);
