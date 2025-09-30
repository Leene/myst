import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import _ from "lodash";
import { HabitPlanner } from "./screens/HabitPlanner";
import { Tile } from "./components/Tile";
import type { LinkTile } from "./types/LinkTile";
import { TileList } from "./components/TileList";
import { AddBtn } from "./components/AddBtn";
import { defaultLinks } from "./data/defaultLinks";

export default function App() {
  const allCategories = _.uniq(_.map(defaultLinks, "tab"));

  return (
    <>
      <Wrapper>
        <div>
          <HabitPlanner />
          <AddBtn color={"red"} />

          <DIV>
            {allCategories.map((category, index) => (
              <Div>
                <H2>{category}</H2>
                <TileList key={index} category={category} />
              </Div>
            ))}
          </DIV>
        </div>
      </Wrapper>

      <H1>Hi :-D</H1>
    </>
  );
}

const DIV = styled.div`
  border: 1px solid blue;
  //margin: 0 auto;
  width: 95vw;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-self: center;
  // y-overflow: scroll;
`;
const DIV2 = styled.div`
  border: 1px solid green;
  // width: 30px;
`;
const DIV3 = styled.div`
  border: 1px solid yellow;
  // width: 30px;
`;

const Header = styled.div`
  height: 100px;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 0;
  padding: 0;
`;
const H1 = styled.h1`
  margin-top: 0;
  padding: 20px 0 0 0;
  text-align: center;
  position: fixed;
  bottom: 0px;
  right: 3%;
`;
const H2 = styled.h2`
  margin-top: 0;
  padding: 0;
  text-align: center;
  font-color: orange;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 90vh;
  padding: 20px;
  // y-overflow: scroll;
`;
const Div = styled.div`
  &:last-child > div {
    border: none;
  }
`;
