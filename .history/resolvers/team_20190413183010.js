export default {
    Mutation: {
        createTeam: (parent, args, { models, user }, info) => {
            try {
                models.Team.create({ ...args, user });
            } catch (e) {
                console.log({ e })
            }
        }
    }
}