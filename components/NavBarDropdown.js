import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import LogOutButton from '../components/LogOutButton';

export default function NavBarDropdown() {
  return (
    <Menu horizontal>
      <Dropdown>
        <Dropdown.Menu>
          <Dropdown.Item>Manage Account</Dropdown.Item>
          <Dropdown.Item>{/* <LogOutButton /> */}Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}
