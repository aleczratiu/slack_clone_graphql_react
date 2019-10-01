export default {
    Mutation: {
        createTeam: async (parent, args, { models, user }, info) => {
            models.Team.create({ ...args, user }),
    }
}