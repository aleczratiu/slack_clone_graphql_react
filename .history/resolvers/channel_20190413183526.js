export default {
    Mutation: {
        createChannel: (parent, args, { models }) => {
            try {
                await models.Channel.create(args);
            } catch (e) {
                console.log({e})
            }
        }
    }
}