export default `
    type Team {
        owner: User!
        members: [User!]!
        channels: [Channel!]!
    }
    
    

    

    type User {
        id: Int!
        username: String!
        email: String!
        teams: [Team!]!

    }
    type Query {
        hi: String
    }

`