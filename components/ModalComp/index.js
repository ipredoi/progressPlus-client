import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import styles from './modal.module.css';

function ModalComp() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      ClassName={StyleSheetList.modal}
      open={open}
      trigger={<Button icon='info'></Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}>
      <Header content='How to use' />
      <Modal.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Modal.Content>
      <Modal.Actions></Modal.Actions>
    </Modal>
  );
}

export default ModalComp;
