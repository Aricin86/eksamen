import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker/locale/nb_NO';
import { StyledOfficeDetailed } from '../styled/Styled';
import Banner from './Banner';

const OfficeDetailedView = ({ error, office }) => {
  const randomName = faker.name.findName();
  const randomPos = faker.name.jobType();

  const NumberOfEmployees = () => {
    for (let i = 0; i <= 14; i += 1) {
      return (
        <ul>
          <li>{randomName}</li>
          <li>{randomPos}</li>
        </ul>
      );
    }
  };

  // const EmployeeMapping = () =>
  //   office.map((data) => <li>{data.employees.name}</li>);

  return (
    <>
      <StyledOfficeDetailed>
        {error && <p>{error}</p>}
        {!office && <p>Fant ingen infomasjon om dette kontoret.</p>}
        <h2>Velkommen til Rørlegger {office.locale}</h2>
        <p>{office.description}</p>
        <h3>Våre ansatte</h3>
        <ul>
          {/* <EmployeeMapping /> */}
          <NumberOfEmployees />
        </ul>
        <Banner>
          <h1>
            Kontakt oss på 69 99 00{' '}
            {office.officenumber < 10
              ? `0${office.officenumber}`
              : office.officenumber}
          </h1>
        </Banner>
      </StyledOfficeDetailed>
    </>
  );
};

OfficeDetailedView.propTypes = {
  error: PropTypes.string,
  office: PropTypes.any,
};

export default OfficeDetailedView;
