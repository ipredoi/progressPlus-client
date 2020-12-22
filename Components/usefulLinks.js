//a component which contains the all the useful links
//used buttongroup to keep the buttons next to one another

import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const UsefulLinks = () => (
  <Button.Group className='links' size='large'>
    <Button href='https://github.com/' target='_blank'>
      Git Hub
    </Button>
    <Button href='http://freecodecamp.org/' target='_blank'>
      Free Code Camp
    </Button>
    <Button href='https://www.codewars.com/' target='_blank'>
      Code Wars
    </Button>
    <Button href='https://stackoverflow.com/' target='_blank'>
      Stack Overflow
    </Button>
    <Button href='https://www.w3schools.com/' target='_blank'>
      W3 Schools
    </Button>
    <Button href='https://developer.mozilla.org/en-US/' target='_blank'>
      MDN Web Docs
    </Button>
  </Button.Group>
);

export default UsefulLinks;
