import { gql } from "graphql-request";

export const signInMutation = gql`
  mutation ($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user {
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

export const meQuery = gql`
  query {
    me {
      id
      name
      email
      phone
      userType
      profile_url
    }
  }
`;
