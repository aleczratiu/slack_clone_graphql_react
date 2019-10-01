export default {
    Mutation: (parent, args, { models, user }, info) => ctx.models.Team.create({ ...args, user: ctx.user}),
}