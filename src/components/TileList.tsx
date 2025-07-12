import React from "react";
import styled from "styled-components";
import type { LinkTile } from "../types/LinkTile";
import { defaultLinks } from "../data/defaultLinks";
import { Tile } from "../components/Tile";

export function TileList() {
  return (
    <Div>
      {defaultLinks.map((link: LinkTile) => (
        <Tile tile={link} key={link.id} />
      ))}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
