import { useState } from "react";
import InputField from "../components/input";
import Wheel from "../components/spinner/spinner";
import Popup from "../components/popup/Popup";
import { Button, Container, InputContainer } from "./styled";

const WheelContainer = () => {
  const [names, setNames] = useState([]);
  const [winner, setWinner] = useState(null);

  const addNames = (value) => {
    if (value) setNames([...names, value]);
  };

  const clearWinner = () => {
    setWinner(null);
  };

  const clearNames = () => {
    setNames([]);
  };

  return (
    <Container>
      <Wheel names={names} setWinner={setWinner} />
      <InputContainer>
        <InputField
          required={names?.length !== 8}
          autoFocus
          updateValue={addNames}
          onBlur={addNames}
          disabled={names?.length === 8}
          title={"Names Filed"}
          placeholder={"Add names here.."}
        />
        <Button onClick={clearNames}>Reset</Button>
      </InputContainer>
      <Popup
        open={Boolean(winner)}
        title={"Winner Announcement"}
        content={`Hurray the winner is: ${winner}`}
        handleClose={clearWinner}
      />
    </Container>
  );
};

export default WheelContainer;
