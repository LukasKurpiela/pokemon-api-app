import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export default function InfoModal({ modalIsOpen, hideModal, character }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={{
        overlay: {
          backgroundColor: 'hsla(0, 0%, 0%, 0.6)',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        // display: 'block',
        content: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          left: '50%',
          top: '20%',
          marginLeft: '-200px',
          borderRadius: '1rem',
          width: '80vw',
          maxWidth: '400px',
          height: '396px',
        },
      }}
    >
      <Description>
        <CloseButton onClick={hideModal}>x</CloseButton>
        <ModalDescription>
          <Headline>
            #{character.id}{' '}
            {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
          </Headline>
          <PTag>
            <span>Type:</span> <br />
            {character.type}
            <img src={character.image} alt="" />
          </PTag>
          <PTag>
            <span>Description:</span> <br />
            {character.description}
          </PTag>
        </ModalDescription>
      </Description>
    </Modal>
  );
}

const ModalDescription = styled.p`
  padding-top: 1rem;
`;

const Headline = styled.h3`
  margin-bottom: 2rem;
`;

const PTag = styled.p`
  margin-top: 1.5rem;
  line-height: 1.4;
  position: relative;

  span {
    text-decoration: underline;
    line-height: 2;
  }

  img {
    position: absolute;
    top: -40%;
    right: 0%;
  }
`;

const Description = styled.div`
  background: white;
  padding: 1rem;
  max-width: 400px;
  min-height: 200px;
`;

const CloseButton = styled.button`
  background-color: lightgrey;
  border: lightgrey solid 1px;
  border-radius: 50%;
  box-shadow: 2px 2px 3px grey;
  height: 1.5rem;
  padding: 0 0.3rem;

  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
  cursor: pointer;
`;

InfoModal.propTypes = {
  modalIsOpen: PropTypes.func,
  hideModal: PropTypes.func,
  character: PropTypes.object,
};
