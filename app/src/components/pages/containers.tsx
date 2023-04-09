import { useAllContainers } from "@/hooks/useContainer";
import Container from "../Container";

export default function Containers({ setPage, setCurrentContainer }: any) {
  const { data: containers, isLoading, isFetching } = useAllContainers();

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4 py-6 px-2">
        {containers?.map((container: any, i: number) => (
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
    </>
  );
}
