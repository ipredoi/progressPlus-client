import React from 'react';
import { Button, Divider } from 'semantic-ui-react';

export default function ProgressButton({ bootcampersArray }) {
  return (
    <div>
      <Button.Group basic vertical>
        {bootcampersArray.map((bootcamper) => {
          return (
            <Button>
              WE NEED NAMES IN DB {bootcamper.bootcamperuuid}
            </Button>
          );
        })}
      </Button.Group>
    </div>
  );
}

/* 
<{/* Button>Freshta</Button>
      <Button>Charlie</Button>
      <Button>Ismail</Button>
      <Button>Hajoo</Button>
      <Button>Patrick</Button> */
