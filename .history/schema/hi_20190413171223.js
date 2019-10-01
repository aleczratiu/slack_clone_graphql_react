export default `
    type Team {
        owner: User!
        members: [User!]!
        channels: [Channel!]!
    }
    
    

    

    
    type Query {
        hi: String
    }

`