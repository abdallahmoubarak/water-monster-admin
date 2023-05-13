import { useAllContainers } from "@/hooks/useContainer";
import ContainerCard from "../ContainerCard";

export default function Containers({ setPage, setCurrentContainer }: any) {
  const { data: containers, isFetching } = useAllContainers();

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4 py-6 px-2">
        {containers?.map((container: any, i: number) => (
          <ContainerCard
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
