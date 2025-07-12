import React from "react";
import styled from "styled-components";
import type { LinkTile } from "../types/LinkTile";
import { defaultLinks } from "../data/defaultLinks";
import { Tile } from "../components/Tile";

//type TileProps = {
//  tile: LinkTile;
//};

export function TileList() {
  //const list = defaultLinks;
  //<Tile tile={demoTile} />
  return (
    <Div>
      {defaultLinks.map((defaultLinks: LinkTile) => (
        <a target="_blank" href={defaultLinks.url}>
          <TileStyle key={defaultLinks.id}>
            <PicDiv>
              <IMG src={defaultLinks.img} />
            </PicDiv>
            <PDiv>
              <P>
                {defaultLinks.tab} <br /> {defaultLinks.title}
              </P>
            </PDiv>
          </TileStyle>
        </a>
      ))}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
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
  background-color: teal;
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
