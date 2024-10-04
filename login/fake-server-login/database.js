module.exports = {
  users: [
    {
      name: "홍준일1",
      email: "user1@user.com",
      nickname: "user111",
      id: "user1",
      password: "user1@user1",
    },
    {
      name: "홍준일2",
      email: "user2@user.com",
      nickname: "user222",
      id: "user2",
      password: "user2@user2",
    },
    {
      name: "홍준일3",
      email: "user3@user.com",
      nickname: "user333",
      id: "user3",
      password: "user3@user3",
    },
  ],

  posts: Array.from({ length: 54 }, (_, i) => ({
    id: i + 1,
    title: `게시물 제목${i}`,
    content: `게시물${i}게시물${i}게시물${i}게시물${i}게시물${i}게시물${i}게시물${i}게시물${i}게시물${i}게시물${i}게시물${i}`,
  })),
};
