import React from "react";
import styled from "styled-components";
import type { LinkTile } from "../types/LinkTile";

type TileProps = {
  tile: LinkTile;
};

export function Tile({ tile }: TileProps) {
  return (
    <a key={tile.id} target="_blank" href={tile.url}>
      <TileStyle>
        <PicDiv>
          <IMG src={tile.img} />
        </PicDiv>
        <PDiv>
          <P>{tile.title}</P>
        </PDiv>
      </TileStyle>
    </a>
  );
}

const IMG = styled.img`
  height: 60px;
  width: auto;
`;

const PicDiv = styled.div`
  display: flex;
  justify-content: center;

  height: 70px;
`;
const PDiv = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: rgb(102, 82, 121);
  margin: 0 -20px -10px -20px;
  height: 30px;
  padding: 10px 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: inset -5px -5px 10px 3px rgba(83, 8, 68, 0.4),
    -2px -2px 20px 2px rgba(0, 0, 0, 0.3);
`;
const P = styled.p`
  margin: 0 15px;
  padding: 0;
  font-size: 10pt;
  letter-spacing: 1px;
  text-align: center;
`;
const Div = styled.div`
  box-shadow: ;
`;

const TileStyle = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  //border: 2px solid #222;
  box-shadow: inset -5px -5px 10px 3px rgba(255, 255, 255, 0.6),
    -5px -5px 10px 3px rgba(68, 58, 45, 0.5);
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  width: 100px;
  &:hover {
    box-shadow: inset -2px -2px 8px 1px #111;
    filter: grayscale(80%) opacity(50%);
  }
`;
