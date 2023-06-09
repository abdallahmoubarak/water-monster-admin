import { gql } from "graphql-request";

export const updateNameMutation = gql`
  mutation ($id: ID!, $name: String!) {
    updateUsers(where: { id: $id }, update: { name: $name }) {
      users {
        id
        name
        email
        phone
        userType
        profile_url
      }
    }
  }
`;

export const updatePhoneMutation = gql`
  mutation ($id: ID!, $phone: String!) {
    updateUsers(where: { id: $id }, update: { phone: $phone }) {
      users {
        id
        name
        email
        phone
        userType
        profile_url
      }
    }
  }
`;

export const updateProfileUrlMutation = gql`
  mutation ($id: ID!, $url: String!) {
    updateUsers(where: { id: $id }, update: { profile_url: $url }) {
      users {
        id
        name
        email
        phone
        userType
        profile_url
      }
    }
  }
`;

export const getUsersQuery = gql`
  query {
    users {
      id
      name
      phone
      email
      containersAggregate {
        count
      }
      viewContainersAggregate {
        count
      }
    }
  }
`;
