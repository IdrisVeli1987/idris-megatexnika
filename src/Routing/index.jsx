import { Route, Routes } from "react-router";
import { Home } from "../Pages/Home";
import { Lease } from "../Pages/Lease";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/icare" element={<Lease />} />
    </Routes>
  );
};
