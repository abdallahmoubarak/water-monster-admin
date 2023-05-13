import { useState } from "react";
import RootLayout from "./layout";
import Users from "../Users";
import Containers from "./containers";
import Head from "next/head";
import Settings from "./settings";
import UserPage from "./userPage";
import Map from "./map";

export default function Home() {
  const [page, setPage] = useState<string>("Users");
  const [currentContainer, setCurrentContainer] = useState<any>({});
  const [user, setUser] = useState<any>({});

  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>

      {page === "Users" && (
        <RootLayout hasNav={true} active={page} setActive={setPage}>
          <Users setPage={setPage} setUser={setUser} />
        </RootLayout>
      )}
      {page === "Containers" && (
        <RootLayout hasNav={true} active={page} setActive={setPage}>
          <Containers
            setPage={setPage}
            setCurrentContainer={setCurrentContainer}
          />
        </RootLayout>
      )}
      {page === "Map" && (
        <RootLayout hasNav={true} active={page} setActive={setPage}>
          <Map />
        </RootLayout>
      )}
      {page === "Settings" && (
        <Settings setPage={setPage} currentContainer={currentContainer} />
      )}
      {page === "User" && (
        <UserPage
          setPage={setPage}
          user={user}
          setCurrentContainer={setCurrentContainer}
        />
      )}
    </>
  );
}
