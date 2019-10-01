export default {
    Query: {
        allUsers: (parent, args, ctx) => { ctx.models.User.findAll({}) },
        getUser: (parent, args, ctx) => { ctx.models.User.findOne({ where: { id: args.id } }) },
    },
    Mutation: {
        createUser: (parent, args, {models}) => { models.User.create(args)},
    }
}