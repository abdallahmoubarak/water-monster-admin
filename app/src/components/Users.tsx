import { useGetUsers } from "@/hooks/useUser";
import Loading from "./Loading";

export default function Users({ setPage, setUser }: any) {
  const { data: users, isLoading, isFetching } = useGetUsers();

  const handleOnClick = (user: any) => {
    setPage && setPage("User");
    setUser && setUser(user);
  };
  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-wrap items-center gap-2 p-2 ">
        {users?.map((user: any, i: number) => (
          <div
            key={i}
            className="flex flex-[1_1_20rem] p-2 gap-4 border border-light_gray rounded-xl shadow-md cursor-pointer"
            onClick={() => handleOnClick(user)}
          >
            <div className="dark-profile-background min-w-[4rem] min-h-[4rem] border max-h-16 border-primary rounded-full"></div>
            <div className="flex justify-between pr-2 w-full items-center">
              <div className="text-sm pt-1">
                <div className="font-bold text-lg ">{user.name}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
              </div>
              <div>
                {user.containersAggregate.count +
                  user.viewContainersAggregate.count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
