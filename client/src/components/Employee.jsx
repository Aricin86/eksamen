import React from 'react';
import faker from 'faker/locale/nb_NO';
import { ProfilePicture } from '../styled/Styled';

const Employee = () => {
  const employees = [];

  for (let i = 0; i <= 13; i += 1) {
    const data = {};
    data.name = faker.name.findName();
    data.position = faker.name.jobType();
    data.img = faker.random.image();
    employees.push(data);
  }

  return employees.map((emp, i) => (
    <div key={i}>
      <ProfilePicture src={emp.img} alt="Employee" />
      <p>{emp.name}</p>
      <p>{emp.position}</p>
    </div>
  ));
};

export default Employee;
