import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function DropdownMenu({
  className,
  option,
  placeHolder,
  handleClick,
  name,
}) {
  return (
    <Dropdown
      name={name}
      clearable
      placeholder={placeHolder}
      fluid
      selection
      options={option}
      onChange={handleClick}
      className={className}
    />
  );
}
