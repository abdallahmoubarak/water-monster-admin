import Image from "next/image";

export default function NavBar({
  activePage = "Containers",
  setActivePage,
}: navProps) {
  return (
    <>
      <div className="fixed bottom-0 bg-primary text-white w-full max-w-full">
        <ul className="nav-ul flex items-center justify-evenly gap-8 relative">
          {navItems.map((item, i) => (
            <li
              key={i}
              className={`nav-li flex flex-col justify-center items-center cursor-pointer relative p-4  ${
                activePage === item.name && "active"
              }`}
              onClick={() => !!setActivePage && setActivePage(item.name)}
            >
              <div className="nav-icon w-[2.2rem] h-[2.2rem]">
                <Image
                  src={item.img || ""}
                  alt={item.name || ""}
                  height={33}
                  width={33}
                />
              </div>
              <span className="nav-text">{item.name}</span>
            </li>
          ))}
          {Boolean(navItems.filter((item) => item.name === activePage)[0]) && (
            <>
              <div className="absolute top-[-0.4rem] left-0 w-full h-[0.4rem] bg-white z-0"></div>
              <div className="circule bg-primary"></div>
            </>
          )}
        </ul>
      </div>
      <style jsx>{`
        .circule-back {
          content: "";
        }

        .nav-ul li.active .nav-icon {
          transform: translateY(-2.1rem);
          -webkit-transform: translateY(-2.1rem);
          -moz-transform: translateY(-2.1rem);
          -ms-transform: translateY(-2.1rem);
          -o-transform: translateY(-2.1rem);
          z-index: 4;
        }

        .nav-ul li.active .nav-text {
          opacity: 1;
        }

        .nav-text {
          position: absolute;
          opacity: 0;
          color: white;
          transform: translateY(0.8rem);
          -webkit-transform: translateY(0.8rem);
          -moz-transform: translateY(0.8rem);
          -ms-transform: translateY(0.8rem);
          -o-transform: translateY(0.8rem);
        }

        .circule {
          position: absolute;
          top: -50%;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          border: 5px solid white;
          left: 0;
          z-index: 1;
        }

        .circule::before {
          content: "";
          position: absolute;
          top: 53%;
          left: -2.8rem;
          width: 2.8rem;
          height: 1.2rem;
          background: transparent;
          border-top-right-radius: 20rem;
          box-shadow: 1px -6px 0 white;
        }

        .circule::after {
          content: "";
          position: absolute;
          top: 53%;
          right: -2.8rem;
          width: 2.8rem;
          height: 1.2rem;
          background: transparent;
          border-top-left-radius: 20rem;
          box-shadow: -1px -6px 0 white;
        }

        .nav-ul li:nth-child(1).active ~ .circule {
          transform: translateX(calc(25vw - 4.05rem));
          -webkit-transform: translateX(calc(25vw - 4.05rem));
          -moz-transform: translateX(calc(25vw - 4.05rem));
          -ms-transform: translateX(calc(25vw - 4.05rem));
          -o-transform: translateX(calc(25vw - 4.05rem));
        }

        .nav-ul li:nth-child(2).active ~ .circule {
          transform: translateX(calc(50vw - 2.05rem));
          -webkit-transform: translateX(calc(50vw - 2.05rem));
          -moz-transform: translateX(calc(50vw - 2.05rem));
          -ms-transform: translateX(calc(50vw - 2.05rem));
          -o-transform: translateX(calc(50vw - 2.05rem));
        }

        .nav-ul li:nth-child(3).active ~ .circule {
          transform: translateX(calc(75vw - 0.05rem));
          -webkit-transform: translateX(calc(75vw - 0.05rem));
          -moz-transform: translateX(calc(75vw - 0.05rem));
          -ms-transform: translateX(calc(75vw - 0.05rem));
          -o-transform: translateX(calc(75vw - 0.05rem));
        }
      `}</style>
    </>
  );
}
const navItems: { name: string; img: any }[] = [
  { name: "Map", img: "/svg/mapmarker.svg" },
  { name: "Users", img: "/svg/users.svg" },
  { name: "Containers", img: "/svg/containers.svg" },
];

type navProps = {
  activePage?: string;
  setActivePage?: Function;
};
