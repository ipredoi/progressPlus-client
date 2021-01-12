import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function DropdownMenu({
  className,
  option,
  placeholder,
  handleClick,
  name,
}) {
  return (
    <Dropdown
      name={name}
      clearable
      placeholder={placeholder}
      fluid
      selection
      options={option}
      onChange={handleClick}
      className={className}
    />
  );
}
