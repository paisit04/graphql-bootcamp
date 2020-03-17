const Post = {
  author(parent, args, { db: { users } }, info) {
    return users.find(({ id }) => id === parent.author);
  },
  comments(parent, args, { db: { comments } }, info) {
    return comments.filter(({ postId }) => postId === parent.id);
  }
};

export { Post as default };
