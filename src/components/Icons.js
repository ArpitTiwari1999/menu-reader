import React from 'react';
import vegIcon from "../icons/vegIcon.png";
import nonvegIcon from "../icons/nonvegIcon.png";

export function VegIcon() {
  return (
    <img src={vegIcon} alt="_Veg" width="15" height="15" className="d-flex align-self-center" />
  );
}

export function NonvegIcon() {
    return (
      <img src={nonvegIcon} alt="_NonVeg" width="15" height="15" className="d-flex align-self-center" />
    );
  }

