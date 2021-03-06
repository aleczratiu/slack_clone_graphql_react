import { requiresAuth } from '../permissions';
import formatErrors from '../formatErrors';

export default {
    Mutation: {
      createTeam: requiresAuth.createResolver(async (parent, args, { models, user }) => {
        try {
            await models.Team.create({ ...args, owner: user.id });
            return {
                ok: true,
            };
        } catch (err) {
            console.log(err);
            return {
                ok: false,
                errors: err,
            };
        }
        }),
    },
};
