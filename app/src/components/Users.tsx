import { useGetUsers } from "@/hooks/useUser";
import Loading from "./Loading";

export default function Users() {
  const { data: users, isLoading, isFetching } = useGetUsers();

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-col gap-2 p-2 ">
        {users?.map((user: any, i: number) => (
          <div
            key={i}
            className="flex p-2 gap-4 border border-light_gray rounded-xl shadow-md cursor-pointer"
          >
            <div className="dark-profile-background min-w-[4rem] min-h-[4rem] border max-h-16 border-primary rounded-full"></div>
            <div className="text-sm pt-1">
              <div className="font-bold text-lg ">{user.name}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
