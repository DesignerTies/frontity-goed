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
          <br /> Allemaal hebben we een verhaal. Gebaseerd op wat ons is
          overkomen en de keuzes die we hebben gemaakt. ‘Vraag niet: ‘Waarom
          ik?, maar: ‘Wat nu?’, is een citaat van Edith Eger,
          Auschwitzoverlevende, psycholoog en schrijfster van De keuze – Leven
          in Vrijheid. <br /> <br /> Wat je ook overkomt, je hebt altijd de
          vrijheid om te kiezen hoe je ermee omgaat. Ik help je graag houvast en
          richting te vinden op een punt in je leven waar je even niet meer weet
          hoe je verder moet.
        </p>
      </div>
    </div>
  );
};

export default connect(RoundedDiv);
