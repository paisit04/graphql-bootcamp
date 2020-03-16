import uuidv4 from 'uuid/v4';

const Mutation = {
  createUser(parent, args, { db: { users } }, info) {
    const emailTaken = users.some(user => user.email === args.email);

    if (emailTaken) {
      throw new Error("Email taken.");
    }

    const user = {
      id: uuidv4(),
      name: args.name,
      email: args.email,
      age: args.age
    };

    users.push(user);

    return user;
  },
  createPost(parent, args, { db: { users } }, info) {
    const userExists = users.some(user => user.id === args.author);

    if (!userExists) {
      throw new Error("User not found");
    }

    const post = {
      id: uuidv4(),
      title: args.title,
      body: args.body,
      published: args.published,
      author: args.author
    };

    posts.push(post);

    return post;
  },
  createComment(parent, args, { db: { users, posts } }, info) {
    const userExists = users.some(user => user.id === args.author);
    const postExists = posts.some(
      post => post.id === args.post && post.published
    );

    if (!userExists || !postExists) {
      throw new Error("Unable to find user and post");
    }

    const comment = {
      id: uuidv4(),
      text: args.text,
      post: args.post,
      author: args.author
    };

    console.log(comment);

    comments.push(comment);

    return comment;
  }
};

export { Mutation as default };
