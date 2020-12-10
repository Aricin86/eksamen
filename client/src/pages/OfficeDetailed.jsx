import React, { useEffect, useState } from 'react';
import { OfficeList } from '../data/OfficeList';
import Banner from '../components/Banner';
import OfficeDetailedView from '../components/OfficeDetailedView';

const OfficeDetailed = () => {
  const [error, setError] = useState('');
  const [office, setOffice] = useState([]);

  useEffect(() => {
    try {
      const id = window.location.pathname.split('/').pop();
      OfficeList.filter((data) => {
        const officenumber = data.officenumber.toString();
        if (officenumber === id) {
          setOffice(data);
          setError('');
        }
      });
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <>
      <Banner>
        <h1>Kontor Rørlegger {office.locale}</h1>
      </Banner>

      {error && <p>{error}</p>}
      <OfficeDetailedView office={office} />
    </>
  );
};

export default OfficeDetailed;
