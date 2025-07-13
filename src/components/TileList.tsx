import React from "react";
import _ from "lodash";
import styled from "styled-components";
import type { LinkTile } from "../types/LinkTile";
import { defaultLinks } from "../data/defaultLinks";
import { Tile } from "../components/Tile";

export function TileList() {
  /*category*/
  const filtered_defaultLinks = _.filter(defaultLinks, { tab: "Start" });

  console.log("hIER ", filtered_defaultLinks);
  //console.log("Erster Titel:", filtered_defaultLinks[0]?.title);
  //console.log("hIER " + defaultLinks[0].tab);
  return (
    /*<Div>
      {defaultLinks.map((link: LinkTile) => (
        <Tile tile={link} key={link.id} />
      ))}
    </Div>*/
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
