import { Outlet } from "react-router-dom";
import Expenses from "../components/expenses/Expenses";

export default function ExpensesLayout() {
  return (
    <>
      <Expenses />
      <Outlet />
    </>
  );
}
