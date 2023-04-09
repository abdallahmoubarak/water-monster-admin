import {
  useUserContainers,
  useUserViewingContainers,
} from "@/hooks/useContainer";
import Layout from "./sLayout";
import Container from "../Container";
import ContainerLoader from "../ContainerLoader";
import { Key, useEffect } from "react";
import { client } from "@/pages/_app";

export default function UserPage({ user, setPage, setCurrentContainer }: any) {
  const {
    data: userContainers,
    isLoading,
    isFetching,
  } = useUserContainers(user.id);

  const { data: viewingContainer } = useUserViewingContainers(user.id);

  useEffect(() => {
    client.setQueryData(
      ["UserContainers"],
      JSON.parse(localStorage.getItem("UserContainers") || "[{}]")
    );
    client.setQueryData(
      ["ViewingContainers"],
      JSON.parse(localStorage.getItem("ViewingContainers") || "[{}]")
    );
  }, []);

  return (
    <Layout title={user?.name} onClick={() => setPage("Users")}>
      <div className="p-3">
        {isLoading && <ContainerLoader />}
        <div className="flex items-center justify-center gap-4 pb-4 flex-wrap ">
          {userContainers?.map((container: any, i: Key) => (
            <Container
              key={i}
              view={false}
              container={container}
              setPage={setPage}
              setCurrentContainer={setCurrentContainer}
              isFetching={isFetching}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 pb-4 flex-wrap ">
          {viewingContainer?.map((container: any, i: Key) => (
            <Container
              view={true}
              key={i}
              container={container}
              setPage={undefined}
              setCurrentContainer={undefined}
              isFetching={isFetching}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
