import styled from 'styled-components/macro';
import { useState } from 'react';
import Modal from 'react-modal';

export default function PokeCard({ character, onToggle, toggleModal }) {
  function getPictures(curryId) {
    const link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${curryId}.png`;
    return link;
  }

  return (
    <Card>
      <h2>
        #{character.id}{' '}
        {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
      </h2>
      <PokeImage src={getPictures(character.id)} />
      <LikeButton onClick={() => onToggle(character)}>
        {character.isFavorite ? 'Free again 🥲' : 'I like!😍'}
      </LikeButton>
      <InfoButton onClick={toggleModal}>i</InfoButton>
      {/*       <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            backgroundColor: 'transparent',
            position: 'fixed',
            left: '50%',
            top: '20%',
            bottom: '50%',
            marginLeft: '-250px',
            width: '500px',
          },
          // display: 'block',
          content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Description>
          <CloseButton onClick={toggleModal}>x</CloseButton>
          <ModalDescription>
            <h4>
              #{character.id}{' '}
              {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
            </h4>
            Description:
          </ModalDescription>
        </Description>
      </Modal> */}
    </Card>
  );
}

const Card = styled.article`
  align-items: center;
  background-image: linear-gradient(to bottom right, #ffe259, #ffa751);
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: 3px 5px 5px grey;
  display: flex;
  flex-direction: column;
  height: 14rem;
  justify-content: center;
  padding: 1rem;
  position: relative;
  width: 20rem;
`;

const LikeButton = styled.button`
  background-color: lightgrey;
  height: 2rem;
  padding-top: 0.3rem;
`;

const InfoButton = styled.button`
  background-color: lightgrey;
  border: lightgrey solid 1px;
  border-radius: 50%;
  box-shadow: 2px 2px 3px grey;
  height: 1.5rem;
  padding: 0 0.3rem;

  position: absolute;
  bottom: 0.5rem;
  right: 0.4rem;
  cursor: pointer;
`;

const PokeImage = styled.img`
  transition: transform 0.4s ease-out;
  &:hover {
    transform: scale(1.5);
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
  right: 0.4rem;
  top: 0.5rem;
  cursor: pointer;
`;

const ModalDescription = styled.p`
  padding-top: 1rem;
`;
