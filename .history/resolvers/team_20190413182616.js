export default {
    Mutation: (parent, args, { models, user }, info) => models.Team.create({ ...args, user: user}),
}