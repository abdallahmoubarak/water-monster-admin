import { useState } from "react";
import RootLayout from "./layout";
import Users from "../Users";
import Containers from "./containers";
import Head from "next/head";

export default function Home() {
  const [active, setActive] = useState("Users");
  const [page, setPage] = useState<string>("Containers");
  const [currentContainer, setCurrentContainer] = useState<any>({});

  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>
      <RootLayout hasNav={true} active={active} setActive={setActive}>
        {active === "Users" && <Users />}
        {active === "Containers" && (
          <Containers
            setPage={setPage}
            setCurrentContainer={setCurrentContainer}
          />
        )}
      </RootLayout>
    </>
  );
}
