import { Route, Routes } from "react-router";
import { Home } from "../Pages/Home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
