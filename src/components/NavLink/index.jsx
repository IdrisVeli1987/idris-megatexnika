import { NavLink as RRD_NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Transform } from "@mui/icons-material";
import { useState } from "react";
import { Typography } from "@mui/material";

export const NavLink = ({ to, title, links }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <RRD_NavLink
        to={to}
        style={({ isActive }) => {
          return {
            color: isActive ? "rgba(255, 192, 31, 1)" : "black", fontSize: '1rem', transform:"translate(0, 3px)"
          };
        }}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {title}
        {Array.isArray(links) && (
          <ExpandMoreIcon
            sx={{
              color: "rgba(255, 192, 31, 1)",
              fonstSize: "1rem",
              transform: "translate(0, 3px)",
            }}
          />
        )}
        {Array.isArray(links) && hover && <Typography>Salam</Typography>}
      </RRD_NavLink>
    </>
  );
};
