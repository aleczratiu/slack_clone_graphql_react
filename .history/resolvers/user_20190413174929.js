export default {
    Query: {
        allUser: (parent, args, ctx, info) => { },
        getUser: (parent, args, ctx, info) => { ctx.models.User.find({ id: args.id }) }
    },
    Mutation: {
        createUser: (parent, args, ctx, info) => { ctx.models.User.create(args) },
    }
}