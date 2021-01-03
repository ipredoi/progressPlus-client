import React from 'react';
import { Input } from 'semantic-ui-react';

export default function InputField({ placeholder, className, onChange }) {
  return (
    <Input
      focus
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
}
