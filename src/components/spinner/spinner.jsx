import React, { useState } from "react";
import {
  Wheel,
  WheelItem,
  SpinCircle,
  Wrapper,
  WheelWrapper,
  Button,
  Span,
} from "./styled";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "pink",
];

const WheelView = ({ names, setWinner }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const randomDegrees = Math.ceil(Math.random() * 3600);
    setRotation(randomDegrees);
    setIsSpinning(true);

    setTimeout(() => {
      const segmentAngle = 360 / names?.length;
      const finalAngle = (randomDegrees % 360) + segmentAngle / 2;
      const winnerIndex =
        Math.ceil((360 - finalAngle) / segmentAngle) % names?.length;
      setWinner(names[winnerIndex]);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <Wrapper>
      <WheelWrapper>
        <SpinCircle />
        <Wheel
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 3s ease-out",
          }}
        >
          <WheelItem key={"name0"} bgColor={colors[0]} index={1}>
            <Span>{names[0]}</Span>
          </WheelItem>
          <WheelItem key={"name1"} index={2} bgColor={colors[1]}>
            <Span>{names[1]}</Span>
          </WheelItem>
          <WheelItem key={"name2"} index={3} bgColor={colors[2]}>
            <Span>{names[2]}</Span>
          </WheelItem>
          <WheelItem key={"name3"} index={4} bgColor={colors[3]}>
            <Span>{names[3]}</Span>
          </WheelItem>
          <WheelItem key={"name4"} index={5} bgColor={colors[4]}>
            <Span>{names[4]}</Span>
          </WheelItem>
          <WheelItem key={"name5"} index={6} bgColor={colors[5]}>
            <Span>{names[5]}</Span>
          </WheelItem>
          <WheelItem key={"name6"} index={7} bgColor={colors[6]}>
            <Span>{names[6]}</Span>
          </WheelItem>
          <WheelItem key={"name7"} index={8} bgColor={colors[7]}>
            <Span>{names[7]}</Span>
          </WheelItem>
        </Wheel>
      </WheelWrapper>
      <Button onClick={spinWheel} disabled={isSpinning || names?.length !== 8}>
        Spin it!
      </Button>
    </Wrapper>
  );
};

export default WheelView;
