import React from "react";
import "./Header.css";

type HeaderProps = {
  title: string
};


// Functional Components
export const Header = ({title}: HeaderProps) => {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}
