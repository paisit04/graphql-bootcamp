const Query = {
  me: () => {
    return {
      id: "123",
      name: "Paisit",
      email: "test@test.com",
      age: 37
    };
  },
  post: () => {
    return {
      id: "456",
      title: "title",
      body: "body",
      published: true
    };
  },
  posts(parent, { query }, { db: { posts } }, info) {
    if (!query) {
      return posts;
    }
    return posts.filter(({ title }) => title.includes(query));
  },
  users(parent, { query }, { db: { users } }, info) {
    if (!query) {
      return users;
    }
    return users.filter(({ name }) => name.includes(query));
  },
  comments(parent, { query }, { db: { comments } }, info) {
    if (!query) {
      return comments;
    }
    return comments.filter(({ text }) => text.includes(query));
  }
};

export { Query as default };