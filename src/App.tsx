import { useState } from "react";
import "./App.css";
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
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Tile tile={demoTile} />

        <TileList />
      </div>
    </>
  );
}
