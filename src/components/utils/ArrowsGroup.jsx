import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
export default function ArrowsGroup({ prevArrow, nextArrow }) {
  //*ARROWS BUTTON STYLES
  const ArrowButtonStyles = {
    border: " 1px solid white",
    width: " 50px",
    height: " 50px",
    borderRadius: "50%",
    color: " white",
    textAlign: " center",
    lineHeight: " 46px",
    transition: " 0.35s ease",
  };

  return (
    <div className="button_group">
      <button className={prevArrow} style={ArrowButtonStyles}>
        <GrPrevious />
      </button>
      <button style={ArrowButtonStyles} className={nextArrow}>
        <GrNext />
      </button>
    </div>
  );
}
