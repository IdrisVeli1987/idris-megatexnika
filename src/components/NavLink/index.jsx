import { NavLink as RRD_NavLink } from "react-router-dom";
export const Navlink = ({ to, title }) => {
  return (
    <RRD_NavLink
      to={to}
      style={({ isActive }) => {
        return {
          color: isActive ? "rgba(255, 192, 31, 1)" : "black",
        };
      }}
    >
      {title}
    </RRD_NavLink>
  );
};
