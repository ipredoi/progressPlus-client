import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const roleOptions = [
  {
    key: 'Bootcamper',
    text: 'Bootcamper',
    value: 'Bootcamper',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Coach',
    text: 'Coach',
    value: 'Coach',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
];

const DropdownSelection = () => (
  <Dropdown placeholder='Select Role' fluid selection options={roleOptions} />
);

export default DropdownSelection;
