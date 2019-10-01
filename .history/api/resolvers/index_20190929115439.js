export default {
    Query: {
        // getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
        // allUsers: (parent, args, { models }) => models.User.findAll(),
    },
    Mutation: {
        hi: () => console.log('hi'),
        // createUser: (parent, args, { models }) => models.User.create(args),
    },
};
