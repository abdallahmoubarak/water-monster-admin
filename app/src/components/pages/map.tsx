"use client";
import { getGeoLocation } from "@/utils/getGeoLocation";
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { Key, useMemo, useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import Image from "next/image";
import { useAllContainers } from "@/hooks/useContainer";
import Alert from "@/components/Alert";
import { client } from "@/pages/_app";

export default function MapPage() {
  const currentLocation: [number, number] = useMemo(
    () => [
      parseFloat(localStorage.getItem("lat") ?? "0"),
      parseFloat(localStorage.getItem("long") ?? "0"),
    ],
    []
  );
  const [alertMsg, setAlertMsg] = useState("");
  const [center, setCenter] = useState<[number, number]>(currentLocation);
  const [zoom, setZoom] = useState(17);

  const { data: containers } = useAllContainers();
  const userData: any = client.getQueryData(["User"]);
  let userType = "Client";
  if (userData) userType = userData.type;

  getGeoLocation();

  return (
    <>
      <div className="w-full h-screen overflow-hidden overscroll-behavior-none relative">
        <div
          className="bottom-8 right-4 w-[3rem] h-[3rem] text-2xl absolute rounded-full flex justify-center items-center cursor-pointer border border-gray-400 text-gray-500"
          onClick={() => {
            setZoom(19);
            setCenter(currentLocation);
          }}
        >
          <BiTargetLock />
        </div>
        <Map
          provider={osm}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
        >
          <ZoomControl />
          {containers
            ?.filter(
              (container: { location: { longitude: any } }) =>
                container?.location?.longitude
            )
            .map(
              (
                container: {
                  location: { longitude: number; latitude: number };
                },
                i: Key
              ) => (
                <Marker
                  key={i}
                  width={50}
                  anchor={[
                    container?.location?.longitude,
                    container?.location?.latitude,
                  ]}
                  onClick={() => {
                    setZoom(18);
                    setCenter([
                      container?.location?.longitude,
                      container?.location?.latitude,
                    ]);
                  }}
                />
              )
            )}
          {containers
            ?.filter(
              (container: { location: { longitude: any } }) =>
                container?.location?.longitude
            )
            .map(
              (
                container: {
                  location: { longitude: number; latitude: number };
                },
                i: Key
              ) => (
                <Marker
                  key={i}
                  width={50}
                  anchor={[
                    container?.location?.longitude,
                    container?.location?.latitude,
                  ]}
                >
                  <Image
                    className="marker-img"
                    src={"/svg/containermarker.svg"}
                    alt=""
                    width={50}
                    height={60}
                  />
                </Marker>
              )
            )}

          {/* owner marker */}
          <Marker
            width={50}
            anchor={currentLocation}
            onClick={() => {
              setZoom(19);
              setCenter(currentLocation);
            }}
          />
          <Marker width={50} anchor={currentLocation}>
            <Image
              className="marker-img"
              src={
                userType === "Client"
                  ? "/svg/admin-marker.svg"
                  : "/svg/tankmarker.svg"
              }
              alt=""
              width={50}
              height={60}
            />
          </Marker>
        </Map>
        <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      </div>
    </>
  );
}
