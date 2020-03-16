const Comment = {
  author(parent, args, { db }, info) {
    return db.users.find(({ id }) => id === parent.author);
  },
  post(parent, args, { db }, info) {
    return db.posts.find(({ id }) => id === parent.post);
  }
};

export { Comment as default };
