export default {
    Mutation: {
        createTeam: async (parent, args, { models, user }, info) => {
            try {
                await models.Team.create({ ...args, user }),
            } catch (e) {
                console.log({ e });
            }
        }
    }
}