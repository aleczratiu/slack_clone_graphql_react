export default `
    type Team {
        owner: User!
        members: [User!]!
        chanels: [Chanel!]!
    }

    type Channel {
        id: Int!
        name: String!
        public: Boolean!
        messages: [Message!]!
    }

    type Message {
        id: Int!
        text: String!
        user: User!
        channel: Channel!
    }

    type User {
        id: Int!
        username: String!
        email: String!
    }

    type Query {
        hi: String
    }
`;
