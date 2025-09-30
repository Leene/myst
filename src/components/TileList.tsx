import React from "react";
import _ from "lodash";
import styled from "styled-components";
import type { LinkTile } from "../types/LinkTile";
import { defaultLinks } from "../data/defaultLinks";
import { Tile } from "../components/Tile";

export function TileList(props) {
  /*category*/
  const category = props.category;

  const filtered_defaultLinks = _.filter(defaultLinks, { tab: category });

  console.log("hIER ", filtered_defaultLinks);

  return (
    <Div>
      {filtered_defaultLinks.map((link: LinkTile) => (
        <Tile tile={link} key={link.id} />
      ))}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  //flex-wrap: wrap;
  justify-content: center;
  max-width: 30vw;
  min-width: 160px;
  border-right: 3px dotted white;
`;
