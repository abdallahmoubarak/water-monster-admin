import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";

export default function RootLayout({
  children,
  hasImg,
  hasNav,
  active,
  setActive,
}: layoutProps) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar hasImg={hasImg} setActive={setActive} />

      <div
        className={` overflow-auto ${hasNav ? "h-screen pb-32" : "h-screen"}`}
      >
        {children}
      </div>

      <div>
        {hasNav && <NavBar activePage={active} setActivePage={setActive} />}
      </div>
    </div>
  );
}

type layoutProps = {
  children?: React.ReactNode;
  hasImg?: boolean;
  hasNav?: boolean;
  active?: string;
  setActive?: Function;
};
