import styled from "@emotion/styled";

export const WheelWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled("button")`
  width: 120px;
  background-color: #0074d9;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-top: 80px;
  border-radius: 10px;
  cursor: pointer;
  :disabled {
    background-color: #286194;
    color: #8e9296;
    cursor: not-allowed;
  }
`;

export const Wheel = styled("div")`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #444;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 0 5px #333, 0 0 0 15px #fff, 1 1 1 18px #fff;
`;

export const WheelItem = styled("div")`
  color: #111;
  position: absolute;
  width: 50%;
  height: 50%;
  background: ${(props) => props.bgColor};
  transform-origin: bottom right;
  transform: rotate(${(props) => `calc(45deg * ${props.index})`});
  clip-path: polygon(0 0, 58% 0, 100% 100%, 0 58%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Span = styled("span")`
  position: relative;
  transform: rotate(45deg);
  font-size: 1.2em;
  font-weight: 700;
`;

export const SpinCircle = styled("div")`
  position: absolute;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  z-index: 10;
  ::before {
    content: "";
    position: absolute;
    overflow: hidden;
    top: -20px;
    left: 15px;
    width: 30px;
    height: 30px;
    background: #fff;
    clip-path: polygon(50% 0%, 15% 100%, 85% 100%);
  }
`;
