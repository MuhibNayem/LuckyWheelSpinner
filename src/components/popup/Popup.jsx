import React from "react";
import { Overlay, Body, Content, Title, Button } from "./styled";

const Popup = ({ open, handleClose, title, content }) => {
  if (!open) return null;

  return (
    <Overlay>
      <Body>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Button onClick={handleClose}>Close</Button>
      </Body>
    </Overlay>
  );
};

export default Popup;
