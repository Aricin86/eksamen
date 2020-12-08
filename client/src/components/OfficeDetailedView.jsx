import React from 'react';
import Banner from './Banner';

// ! Trenger officenumber, locale og ansatte
const OfficeDetailedView = () => (
  <>
    <Banner>
      <h1>Kontor detaljert</h1>
    </Banner>
    <main>
      <h2>Velkommen til Rørlegger</h2>
      <p>Lorem ipsum</p>
      <h3>Våre ansatte</h3>
      <section>
        <p>Ansatt Ansattnavn</p>
        <p>Stilling</p>
      </section>
      <section>
        <h2>Kontakt oss på 69 99 00 ..</h2>
      </section>
    </main>
  </>
);

export default OfficeDetailedView;
