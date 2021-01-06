//a component which contains the all the useful links
//used buttongroup to keep the buttons next to one another

import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { linksArr } from '../libs/globalVariables/usefulLinks';

const UsefulLinks = () => (
  <Button.Group size='large'>
    {linksArr.map((linksObject) => {
      return (
        <Button key={linksObject.title} href={linksObject.link} target='_blank'>
          {linksObject.title}
        </Button>
      );
    })}
  </Button.Group>
);

export default UsefulLinks;
