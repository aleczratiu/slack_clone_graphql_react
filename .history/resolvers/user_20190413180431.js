export default {
    Query: {
        allUsers: (parent, args, ctx, info) => { ctx.models.User.findAll({}) },
        getUser: (parent, args, ctx, info) => { ctx.models.User.findOne({ where: { id: args.id } }) },
    },
    Mutation: {
        createUser: (parent, args, {models}, info) => { models.create(args)},
    }
}