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

    type User {

    }

    type Query {
        hi: String
    }
`;
