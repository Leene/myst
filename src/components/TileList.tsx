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
            {defaultLinks.tab} - {defaultLinks.title}
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
  background-color: lightgreen;
  justify-content: center;
  width: 200px;
  height: 100px;
`;

const TileStyle = styled.div`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
`;
