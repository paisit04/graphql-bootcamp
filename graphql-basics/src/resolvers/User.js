const User = {
  posts(parent, args, { db: { posts } }, info) {
    return posts.filter(({ userId }) => userId === parent.id);
  },
  comments(parent, args, { db: { comments } }, info) {
    return comments.filter(({ userId }) => userId === parent.id);
  }
};

export { User as default };
