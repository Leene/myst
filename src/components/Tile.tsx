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
          <P>
            {tile.tab} <br /> {tile.title}
          </P>
        </PDiv>
      </TileStyle>
    </a>
  );
}

const IMG = styled.img`
  height: 80px;
  width: auto;
`;

const PicDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 100px;
`;
const PDiv = styled.div`
  background-color: rgb(102, 82, 121);
  width: 250px;
  margin: 0 -20px -10px -20px;
  padding: 10px 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: -2px -2px 20px 2px rgba(0, 0, 0, 0.3);
`;
const P = styled.p`
  margin: 0;
  padding: 0;
`;

const TileStyle = styled.div`
  background-color: #444;
  border: 2px solid #222;
  box-shadow: -5px -5px 10px 3px #111;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;

  &:hover {
    box-shadow: inset -2px -2px 8px 1px #111;
    filter: grayscale(80%) opacity(50%);
  }
`;
