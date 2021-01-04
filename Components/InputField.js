import React from 'react';
import { Input } from 'semantic-ui-react';

export default function InputField({ placeholder, className, onChange, icon }) {
  console.log(className);
  return (
    <Input
      focus
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
}
