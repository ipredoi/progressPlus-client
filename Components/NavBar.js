import React from 'react';
import { List } from 'semantic-ui-react';

//generic component takes in array of objects - each object contains a link and a title
function NavBar({ linksAndTitles }) {
  return (
    <List>
      {linksAndTitles.map((object) => {
        return (
          <List.Item active href={object.link}>
            {object.title}
          </List.Item>
        );
      })}
    </List>
  );
}

export default NavBar;
