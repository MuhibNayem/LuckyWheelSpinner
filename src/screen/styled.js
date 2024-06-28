import styled from "@emotion/styled";

export const Button = styled("button")`
  width: 120px;
  background-color: #0074d9;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  :disabled {
    background-color: #286194;
    color: #8e9296;
    cursor: not-allowed;
  }
`;

export const Container = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const InputContainer = styled("div")`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
