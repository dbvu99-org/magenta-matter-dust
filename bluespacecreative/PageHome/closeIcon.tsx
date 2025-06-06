import React from "react";

function closeIcon({ width, height, ...rest }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  );
}

export default closeIcon;
