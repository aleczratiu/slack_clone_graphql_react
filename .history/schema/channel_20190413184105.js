export default `
    type Channel {
        id: Int!
        name: String!
        public: Boolean!
        message: [Message!]!
        users: [User!]!
    }

    type Mutation {
        createChannel(team_id: Int, name: String!, public: Boolean=false): Boolean!
    }
`