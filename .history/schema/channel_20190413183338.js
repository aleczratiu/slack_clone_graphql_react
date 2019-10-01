export default `
    type Channel {
        id: Int!
        name: String!
        public: Boolean!
        message: [Message!]!
        users: [User!]!
    }

    type Mutation {
        createTeam(name: String!): Boolean!
    }
`