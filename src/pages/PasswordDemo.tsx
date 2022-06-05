import React from 'react';
import PasswordField from 'src/components/inputs/password';
import {Title} from 'src/components/title';

const PasswordDemo: React.FC = () => {
  return (
    <>
      <Title>Password Input</Title>
      <PasswordField />
    </>
  );
};

export default PasswordDemo;
