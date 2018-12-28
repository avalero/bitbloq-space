import {
  addMockFunctionsToSchema,
  gql,
  makeExecutableSchema,
} from 'apollo-server';
import { GraphQLSchema } from 'graphql';

const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`
    type Query {
      allUsers: [User]
    }
    type Mutation {
      signUpUser(input: UserIn!): Token
      activateAccount(sign_up_token: String!): User
      login(email: String!, password: String!): User
      deleteUser(email: String!): User
      updateUser(input: UserIn!): User
    }
    type User {
      email: String
      password: String
      name: String
      center: String
      active: Boolean
      sign_up_token: String
      auth_token: String
      notifications: Boolean
    }

    input UserIn {
      email: String
      password: String
      name: String
      center: String
      active: Boolean
      sign_up_token: String
      auth_token: String
      notifications: Boolean
    }

    type Token {
      token: String
    }
  `,
});

addMockFunctionsToSchema({ schema: userSchema });

export default userSchema;
