import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const stateOptions = [
  {
    key: '2',
    text: '1',
    value: '1',
  },
  {
    key: '2',
    text: '2',
    value: '2',
  },
];

const DropdownExampleSearchSelectionTwo = () => (
  <Dropdown placeholder='State' search selection options={stateOptions} />
);

export default DropdownExampleSearchSelectionTwo;
