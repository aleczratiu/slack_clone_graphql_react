export default `
    type User {
        id: Int!
        username: String!
        email: String!
        teams: [Team!]!
    }

    type Query {
        createUser(username: String!, email: String!, password: String!): User!
    }
`