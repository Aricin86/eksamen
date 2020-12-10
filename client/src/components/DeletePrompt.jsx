import React, { useEffect, useState } from 'react';
import { PromptStyled, PromptContent, Button, Overlay } from '../styled/Styled';

const DeletePrompt = ({ togglePrompt, handleDelete, title }) => {
  const [agreeToDelete, setAgreeToDelete] = useState(false);

  const closePrompt = (e) => {
    togglePrompt(e);
  };

  useEffect(() => {
    if (agreeToDelete) {
      handleDelete();
    }
  }, [agreeToDelete]);

  return (
    <>
      <PromptStyled>
        <PromptContent>
          <p>Er du sikker på at du vil slette artikkelen "{title}"?</p>
          <Button type="button" onClick={() => setAgreeToDelete(true)}>
            Slett
          </Button>
          <Button type="button" onClick={closePrompt}>
            Avbryt
          </Button>
        </PromptContent>
      </PromptStyled>

      <Overlay onClick={closePrompt} />
    </>
  );
};
export default DeletePrompt;
