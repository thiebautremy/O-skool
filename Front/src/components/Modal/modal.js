import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { changeErrorModal, changeMessageErrorModal } from '../../actions/auth'
import { changeConfirmDeleteModal } from '../../actions/app'
import { connect } from 'react-redux';

function ModalMessage({
  title, 
  message, 
  confirmBtn, 
  handleYes,
  handeChangeErrorModal,
  handleChangeMessageErrorModal,
  handleChangeConfirmDeleteModal
}) {
  const [open, setOpen] = React.useState(true)
  const handleOnClose = () => {
    handeChangeErrorModal(false);
    handleChangeConfirmDeleteModal(false);
    handleChangeMessageErrorModal('');
    setOpen(false);
  }
  return (
    <Modal
      closeIcon
      open={open}
      // trigger={<Button>Show Modal</Button>}
      onClose={() => handleOnClose()}
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
                <Button color='red' onClick={() => handleOnClose()}>
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

const mapStateToProps = (state) => {
  return ({})
}

const mapDispatchToProps = (dispatch) => ({
    handeChangeErrorModal: (value) => {
      dispatch(changeErrorModal(value))
    },
    handleChangeMessageErrorModal: (value) => {
      dispatch(changeMessageErrorModal(value))
    },
    handleChangeConfirmDeleteModal: (value) => {
      dispatch(changeConfirmDeleteModal(value))
    }
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ModalMessage)