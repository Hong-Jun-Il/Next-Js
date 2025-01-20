import { faker } from "@faker-js/faker";

function generateDate() {
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: new Date(),
  });
}

function generateImages() {
  const imageCount = Math.floor(Math.random() * 5);
  if (imageCount === 0) {
    return null;
  } else {
    return Array.from({ length: imageCount }, (_, i) => ({
      imageId: i + 1,
      link: faker.image.urlLoremFlickr(),
    }));
  }
}

export const db = {
  User: [
    {
      id: "user1",
      password: "user1@user1",
      name: "user1",
      email: "user1@user1.com",
      age: 20,
      image: faker.image.avatar(),
    },
    {
      id: "user2",
      password: "user2@user2",
      name: "user2",
      email: "user2@user2.com",
      age: 40,
      image: faker.image.avatar(),
    },
    {
      id: "user3",
      password: "user3@user3",
      name: "user3",
      email: "user3@user3.com",
      age: 60,
      image: faker.image.avatar(),
    },
  ],
  Posts: Array.from({ length: 48 }, (_, i) => ({
    postId: i + 1,
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: faker.image.avatar(),
    },
    content: `content${i + 1} content${i + 1} content${i + 1} content${
      i + 1
    } content${i + 1}`,
    createdAt: generateDate(),
    Images: generateImages(),
  })),
  followingPosts: Array.from({ length: 22 }, (_, i) => ({
    postId: i + 1,
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: faker.image.avatar(),
    },
    content: `${i + 1} Stop Following me. I'm too famous`,
    Images: generateImages(),
    createdAt: generateDate(),
  })),
};
