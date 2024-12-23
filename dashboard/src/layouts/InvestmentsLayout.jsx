import { Outlet } from "react-router-dom";
import Investments from "../components/investments/Investments";

export default function InvesmentsLayout() {
  return (
    <>
      <Investments />
      <Outlet />
    </>
  );
}
