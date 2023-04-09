import ContainerSVG from "@/components/svg/ContainerSVG";
import Image from "next/image";
import { BiWater } from "react-icons/bi";
import { HiOutlineClock } from "react-icons/hi";
import { humanReadableTime } from "@/utils/time";
import Loading from "./svg/Loading";

interface ContainerCard {
  view: boolean;
  container: any;
  setPage: any;
  setCurrentContainer: any;
  isFetching: boolean;
}

export default function Container({
  container,
  setPage,
  setCurrentContainer,
  isFetching,
}: ContainerCard) {
  const handleOnSettingsClick = () => {
    setPage && setPage("Settings");
    setCurrentContainer && setCurrentContainer(container);
  };

  const handleOnDelete = () => {
    alert("not yet active");
    console.log(container.id);
  };

  const calc = Math.round(
    ((container?.height - container?.distance / 10 + 18) * 100) /
      container?.height
  );

  const waterLevel = calc > 0 && calc < 100 ? calc : calc < 0 ? 1 : 100;

  return (
    <div className="border border-gray-200 flex-[1_1_24rem] px-4 py-2 rounded-2xl shadow-[0_0_10px_0_rgba(0,0,0,0.2)]">
      <div className="text-2xl flex items-center justify-between pt-2">
        <div>{container?.name} Container</div>

        <div className="w-8 h-8 cursor-pointer" onClick={handleOnSettingsClick}>
          <Image src={"/svg/settings.svg"} width={30} height={30} alt="s" />
        </div>
      </div>
      <div>For: {container?.user.name}</div>
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
            container?.sensor_state ? "bg-primary" : "bg-secondary"
          }`}
        ></div>
      </div>
    </div>
  );
}
