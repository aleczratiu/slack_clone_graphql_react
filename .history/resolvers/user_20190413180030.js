export default {
    Query: {
        allUsers: (parent, args, ctx, info) => { ctx.models.User.findAll({}) },
        getUser: (parent, args, ctx, info) => { ctx.models.User.findOne({ where: { id: args.id } }) },
    },
    Mutation: {
        createUser: (parent, args, ctx, info) => { console.log({ctx})},
    }
}