import React from 'react';
import PropTypes from 'prop-types';
import { EmployeeSection, StyledOfficeDetailed } from '../styled/Styled';
import Banner from './Banner';
import Employee from './Employee';

const OfficeDetailedView = ({ office }) => (
  <>
    <StyledOfficeDetailed>
      {!office && <p>Fant ingen infomasjon om dette kontoret.</p>}
      <h2>Velkommen til Rørlegger {office.locale}</h2>
      <p>{office.description}</p>
      <h3>Våre ansatte</h3>
      <EmployeeSection>
        <Employee />
      </EmployeeSection>

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

OfficeDetailedView.propTypes = {
  office: PropTypes.any,
};

export default OfficeDetailedView;
