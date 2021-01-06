//a component which contains the all the useful links
//used buttongroup to keep the buttons next to one another

import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { linksArr } from '../../libs/globalVariables/usefulLinks';

export default function UsefulLinks() {
  return (
    <div>
      {linksArr.map((linksObject) => {
        return <img src={linksObject.src} />;
      })}
    </div>
  );
}

{
  /* <Button.Group className='links' size='large'>
    {linksArr.map((linksObject) => {
      return (
        <div>
          <Button href={linksObject.link} target='_blank'>
            {linksObject.title}
          </Button>
        </div>
      );
    })}
  </Button.Group> */
}
