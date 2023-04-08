import { useState } from "react";
import RootLayout from "./layout";
import Users from "../Users";

export default function Home() {
  const [active, setActive] = useState("Users");

  return (
    <>
      <RootLayout hasNav={true} active={active} setActive={setActive}>
        {active === "Users" && <Users />}
      </RootLayout>
    </>
  );
}
