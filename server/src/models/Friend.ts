import {objectType} from 'nexus';

export const Friend = objectType({
  name: 'Friend',
  definition(t) {
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
    t.field('user', {type: 'User'});
    t.field('friend', {type: 'User'});
  },
});
