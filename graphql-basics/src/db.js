const posts = [
  { id: "p1", title: "post1", body: "body1", published: true, userId: "u1" },
  { id: "p2", title: "post2", body: "body2", published: false, userId: "u2" },
  { id: "p3", title: "post3", body: "body3", published: true, userId: "u1" },
  { id: "p4", title: "post24", body: "body4", published: false, userId: "u2" }
];

const users = [
  {
    id: "u1",
    name: "Paisit",
    email: "test@test.com",
    age: 37
  },
  {
    id: "u2",
    name: "Paisit2",
    email: "test2@test.com",
    age: 37
  }
];

const comments = [
  {
    id: "c1",
    text: "comment1",
    author: "u1",
    postId: "p1"
  },
  {
    id: "c2",
    text: "comment2",
    author: "u1",
    postId: "p2"
  }
];

const db = {
  users,
  posts,
  comments
};

export {db as default};
