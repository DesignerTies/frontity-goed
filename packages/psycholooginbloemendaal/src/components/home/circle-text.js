import connect from '@frontity/connect';
import React, { Component } from 'react';

const RoundedDiv = () => {
  return (
    <div className='rounded-div'>
      <img
        src='https://live.staticflickr.com/65535/55204486543_140ec92e00_c.jpg'
        alt='over-mij-preview'
        className='foto-over-mij'
      />
      <div className='text-wrap'>
        <h1>WELKOM</h1>
        <h2>Ik help je graag</h2>
        <p>
          <br /> Als het niet meer gaat zoals je wilt, ligt daar vaak meer onder. Oude patronen en ervaringen
          sturen hoe je voelt, denkt en reageert. Vaak zonder dat je het doorhebt. Dat kan ervoor zorgen dat
          je vastloopt, in jezelf of in je relaties. <br />
          <br /> In mijn praktijk werk ik vanuit kennis van trauma, hechting en het brein. Ik ben
          wetenschappelijk opgeleid en heb jarenlange ervaring in de praktijk. <br />
          <br /> We maken inzichtelijk wat jou stuurt. Maar begrijpen alleen is niet genoeg, het gaat ook om
          voelen, verdragen en stap voor stap veranderen in de richting die jij wilt.
        </p>
      </div>
    </div>
  );
};

export default connect(RoundedDiv);
