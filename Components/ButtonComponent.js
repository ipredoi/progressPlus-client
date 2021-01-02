import React from 'react';
import { Button } from 'semantic-ui-react';

export default function ButtonComponent({
  className,
  handleClick,
  buttonText,
  color,
}) {
  return (
    <div>
      <Button className={className} color={color} onClick={handleClick}>
        {buttonText}
      </Button>
    </div>
  );
}
