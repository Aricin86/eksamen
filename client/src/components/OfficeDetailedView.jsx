import React from 'react';

const OfficeDetailedView = ({ error, office }) => (
  <>
    <main>
      {error && <p>{error}</p>}
      {!office && <p>Fant ingen infomasjon om dette kontoret.</p>}
      <h2>Velkommen til Rørlegger {office.locale}</h2>
      <p>Lorem ipsum</p>
      <h3>Våre ansatte</h3>
      <section>
        <p>Ansatt Ansattnavn</p>
        <p>Stilling</p>
      </section>
      <section>
        <h2>
          Kontakt oss på 69 99 00{' '}
          {office.officenumber < 10
            ? `0${office.officenumber}`
            : office.officenumber}
        </h2>
      </section>
    </main>
  </>
);

export default OfficeDetailedView;
