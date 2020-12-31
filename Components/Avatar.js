//all from semantic ui(avatar)
//need to work on a drop down onclick to show sign out option
import React from 'react';
import { Image } from 'semantic-ui-react';

export default function Avatar({ src, name, imgStyle }) {
  return (
    <div className='avatar'>
      <Image src={src} style={imgStyle} />
      <span className='profileName'>{name}</span>
    </div>
  );
}
