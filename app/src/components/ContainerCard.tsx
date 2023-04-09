import ContainerSVG from "@/components/svg/ContainerSVG";
import Image from "next/image";
import { BiWater } from "react-icons/bi";
import { HiOutlineClock } from "react-icons/hi";
import { humanReadableTime } from "@/utils/time";
import Loading from "./svg/Loading";
import { sensorState } from "@/utils/sensorState";

interface ContainerCard {
  view: boolean;
  container: any;
  setPage: any;
  setCurrentContainer: any;
  isFetching: boolean;
}

export default function ContainerCard({
  container,
  setPage,
  setCurrentContainer,
  isFetching,
}: ContainerCard) {
  const handleOnSettingsClick = () => {
    setPage && setPage("Settings");
    setCurrentContainer && setCurrentContainer(container);
  };

  const calc = Math.round(
    ((container?.height - container?.distance / 10 + 18) * 100) /
      container?.height
  );

  const waterLevel = calc > 0 && calc < 100 ? calc : calc < 0 ? 1 : 100;

  return (
    <div className="border border-gray-200 flex-[1_1_24rem] p-2 rounded-2xl shadow-[0_0_10px_0_rgba(0,0,0,0.2)]">
      <div className="flex gap-3">
        <div className="transition-all duration-[3s] ease-in-out max-w-[6rem]">
          {container.water_level ? (
            <ContainerSVG level={container?.water_level} />
          ) : (
            <ContainerSVG level={waterLevel} />
          )}
        </div>
        <div className="flex-auto">
          <div className="text-xl flex items-center justify-between pt-2 font-bold">
            <div>{container?.name} Container</div>
            <div
              className="w-8 h-8 cursor-pointer"
              onClick={handleOnSettingsClick}
            >
              <Image src={"/svg/settings.svg"} width={30} height={30} alt="s" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex justify-center items-center bg-gray-500 w-4 h-4 rounded-full">
              <Image src={"/svg/users.svg"} alt={""} width={12} height={12} />
            </div>
            {container?.user.name}
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <span>
              <BiWater />
            </span>
            {container.water_level ? (
              <>
                <span>
                  {(container?.size * container?.water_level) / 100} liter
                </span>
                <span>({container?.water_level} %)</span>
                {isFetching && (
                  <span>
                    <Loading />
                  </span>
                )}
              </>
            ) : (
              <>
                <span>{(container?.size * waterLevel) / 100} liter</span>
                <span>({waterLevel}%)</span>
                {isFetching && (
                  <span>
                    <Loading />
                  </span>
                )}
              </>
            )}
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <span>
              <HiOutlineClock />
            </span>
            <span>{humanReadableTime(container?.updatedAt)}</span>
            {isFetching && (
              <span>
                <Loading />
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-2 pr-2">
            <div>Sensor State</div>
            <div
              className={`rounded-full w-4 h-4  ${
                sensorState({ date: container.updatedAt })
                  ? "bg-primary"
                  : "bg-secondary"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
