import React from 'react';
import { List } from 'semantic-ui-react';

//generic component takes in array of objects - each object contains a link and a title
function NavBar({ linksAndTitles }) {
  return (
    <List>
<<<<<<< HEAD
      {linksAndTitles.map((object) => {
        return (
          <List.Item active href={object.link}>
            {object.title}
          </List.Item>
        );
      })}
=======
      {linksAndTitles.map((object) => (
        <List.Item active href={object.link}>
          {object.title}
        </List.Item>
      ))}
>>>>>>> def9f699b6a156f38f4bdf6d1ba479c7575344ed
    </List>
  );
}

export default NavBar;
