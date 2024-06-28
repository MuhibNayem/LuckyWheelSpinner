import styled from "@emotion/styled";

export const Overlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 12;
`;

export const Body = styled("div")`
  background: #282c34;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
`;

export const Title = styled("h2")`
  margin-top: 0;
  color: #fff;
`;

export const Content = styled("p")`
  color: #fff;
`;

export const Button = styled("button")`
  margin-top: 20px;
  padding: 10px 20px;
  background: #0f100f;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0f100f9c;
  }
`;
