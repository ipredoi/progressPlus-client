//all from semantic ui(avatar)
//need to work on a drop down onclick to show sign out option
import React from 'react';
import { Image } from 'semantic-ui-react';

const Avatar = () => (
  <div className='avatar'>
    <Image
      src='https://ca.slack-edge.com/T6L933W4X-U01AAKNKAU9-2f9d3108ad84-512'
      avatar
    />
    <span className='profileName'>Patrick</span>
  </div>
);

export default Avatar;
