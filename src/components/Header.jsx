import React from "react";
import DrawIcon from '@mui/icons-material/Draw';
import { Draw } from "@mui/icons-material";

export default function Header() {
  return (
    <header>

      <h1 className="not-selectable"><DrawIcon /> Note Pad</h1>
    </header>
  );
}
