export default {
    Mutation: (parent, args, ctx, info) => ctx.models.Team.create(args),
}