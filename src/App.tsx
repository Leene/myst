import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Tile } from "./components/Tile";
import type { LinkTile } from "./types/LinkTile";
import { TileList } from "./components/TileList";

export default function App() {
  const [count, setCount] = useState(0);

  const demoTile: LinkTile = {
    id: "1",
    tab: "Start",
    title: "YouTube",
    url: "https://youtube.com",
  };

  return (
    <Wrapper>
      <Header>
        <H1>Begrüßung</H1>
      </Header>

      <div>
        <TileList />
      </div>
    </Wrapper>
  );
}

const Header = styled.div`
  height: 200px;
  background-color: lightblue;
  margin-top: 0;
  padding: 0;
`;
const H1 = styled.h1`
  margin-top: 0;
  padding: 0;
  text-align: center;
`;
const Wrapper = styled.div`
  height: 100%;
  //background-color: green;
  margin: 0;
  padding: 0;
`;
