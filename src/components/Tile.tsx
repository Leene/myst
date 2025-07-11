import React from "react";
import type { LinkTile } from "../types/LinkTile";

type TileProps = {
  tile: LinkTile;
};

export function Tile({ tile }: TileProps) {
  return (
    <a
      href={tile.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        padding: "1rem",
        margin: "0.5rem",
        borderRadius: "8px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        textDecoration: "none",
        color: "#333",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {tile.title}
    </a>
  );
}
