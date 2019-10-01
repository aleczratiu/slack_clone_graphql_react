export default `
    type Team {
        owner: User!
        members: [User!]!
        chanels: [Chanel!]!
    }

    type Chanel {
        id: Int!
        
    }
  type Query {
    hi: String
  }
`;
