export default {
    Query: {
        // getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
        // allUsers: (parent, args, { models }) => models.User.findAll(),
        hi: () => console.log('hi');
    },
    Mutation: {
        // createUser: (parent, args, { models }) => models.User.create(args),
    },
};
