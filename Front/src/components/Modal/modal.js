import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalMessage({title, message, confirmBtn, handleYes}) {
  const [open, setOpen] = React.useState(true)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Show Modal</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content={title} />
      <Modal.Content>
        <p>
          {message}
        </p>
      </Modal.Content>
      {
          confirmBtn === true &&
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                <Icon name='remove' /> Non
                </Button>
                <Button 
                    color='green' 
                    onClick={() => {
                            setOpen(false)
                            handleYes()
                        }}>
                <Icon name='checkmark' /> Oui
                </Button>
            </Modal.Actions>
        }
    </Modal>
  )
}

export default ModalMessage