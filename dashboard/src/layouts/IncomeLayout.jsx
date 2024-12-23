import { Outlet } from "react-router-dom";
import Income from "../components/income/Income";

export default function IncomeLayout() {
  return (
    <>
      <Income />
      <Outlet />
    </>
  );
}
