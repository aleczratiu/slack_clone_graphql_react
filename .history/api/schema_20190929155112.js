export default `
    type Team {
        owner: User!
        members: [User!]!
        chanels: [Chanel!]!
    }

    type Chanel {
        id: Int!
        name: String!
        public: Boolean!
        messages: [Message!]!
    }
  type Query {
    hi: String
  }
`;
