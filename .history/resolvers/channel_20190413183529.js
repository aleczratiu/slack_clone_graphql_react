export default {
    Mutation: {
        createChannel: async (parent, args, { models }) => {
            try {
                await models.Channel.create(args);
            } catch (e) {
                console.log({e})
            }
        }
    }
}