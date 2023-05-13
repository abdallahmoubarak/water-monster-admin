import { gql } from "graphql-request";

export const allContainersQuery = gql`
  query {
    containers {
      name
      location {
        x
        y
      }
      id
      height
      distance
      address
      manual_mode
      private_mode
      sensor_state
      serialNumber
      size
      updatedAt
      water_level
      pending
      user {
        name
      }
    }
  }
`;

export const userContainerQuery = gql`
  query ($id: ID!) {
    containers(where: { user: { id: $id } }) {
      id
      name
      size
      height
      distance
      sensor_state
      private_mode
      manual_mode
      water_level
      address
      updatedAt
    }
  }
`;

export const userViewingContainerQuery = gql`
  query ($id: ID!) {
    users(where: { id: $id }) {
      viewContainers {
        id
        name
        size
        height
        distance
        water_level
        sensor_state
        updatedAt
      }
    }
  }
`;

export const updateContainerMutation = gql`
  mutation (
    $container_id: ID!
    $name: String!
    $size: String!
    $height: String!
  ) {
    updateContainers(
      where: { id: $container_id }
      update: { name: $name, size: $size, height: $height }
    ) {
      containers {
        id
        name
        size
        height
        sensor_state
        private_mode
        manual_mode
        water_level
        updatedAt
      }
    }
  }
`;
