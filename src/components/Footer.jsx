import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className="not-selectable">
        Developed by Joel Lacerda © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
