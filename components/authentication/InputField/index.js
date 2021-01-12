import React from 'react';
import { Input } from 'semantic-ui-react';

export default function InputField({ placeholder, className, onChange, name }) {
  className;
  return (
    <Input
      name={name}
      focus
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
}
