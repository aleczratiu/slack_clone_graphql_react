export default `
    type User {
        id: Int!
        username: String!
        email: String!
        teams: [Team!]!
    }
`