import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

import { updateContainerTypes, useUpdateContainerTypes } from "./hookTypes";
import {
  allContainersQuery,
  updateContainerMutation,
  userContainerQuery,
  userViewingContainerQuery,
} from "./gql/container";

/*********************** getting user containers ***********************/

const getAllContainers = async () => {
  const res: any = await graphQLClient.request(allContainersQuery);
  return res?.containers;
};

export const useAllContainers = () => {
  return useQuery({
    queryKey: ["Containers"],
    queryFn: () => getAllContainers(),
    onSuccess: (res) => localStorage.setItem("Containers", JSON.stringify(res)),
  });
};

/*********************** getting user containers ***********************/

const getUserContainers = async (id: string) => {
  const variables = { id };
  const res: any = await graphQLClient.request(userContainerQuery, variables);
  return res?.containers;
};

export const useUserContainers = (id: string) => {
  return useQuery({
    queryKey: ["Containers"],
    queryFn: () => getUserContainers(id),
    onSuccess: (res) => localStorage.setItem("Containers", JSON.stringify(res)),
  });
};

/*********************** getting user viewing containers ***********************/

const getUserViewingContainers = async (id: string) => {
  const variables = { id };
  const res: any = await graphQLClient.request(
    userViewingContainerQuery,
    variables
  );
  return res?.users[0].viewContainers;
};

export const useUserViewingContainers = (id: string) => {
  return useQuery({
    queryKey: ["ViewingContainers"],
    queryFn: () => getUserViewingContainers(id),
    onSuccess: (res) =>
      localStorage.setItem("ViewingContainers", JSON.stringify(res)),
  });
};

/************************* update a container *************************/

const updateContainer = async ({
  id,
  name,
  size,
  height,
}: updateContainerTypes) => {
  const variables = { container_id: id, name, size, height };
  const res: any = await graphQLClient.request(
    updateContainerMutation,
    variables
  );
  return res?.updateContainers?.containers;
};

export const useUpdateContainer = ({
  setPage,
  setIsLoading,
}: useUpdateContainerTypes) => {
  return useMutation(updateContainer, {
    onSuccess: () => setPage("Containers"),
    onError: () => setIsLoading(false),
  });
};
