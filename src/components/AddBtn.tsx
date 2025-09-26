import React from "react";
import _ from "lodash";
import styled from "styled-components";

type AddBtn = {
  color: string;
};

export function AddBtn({ color }: AddBtn) {
  console.log("Farbe:" + color);
  return (
    <Div $bgColor={color}>
      <P>+</P>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  //justify-content: center;
  //align-items: center;
  padding: 4px;

  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: ${(props) => props.$bgColor};
`;

const P = styled.p`
  //border: 2px solid green;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: -4px auto auto auto;
  width: 30px;
  height: 30px;
  font-size: 30pt;
  font-weight: bold;
`;
