module.exports = {
  posts: Array.from({ length: 54 }, (_, i) => ({
    id: i + 1,
    title: `post${i + 1}`,
    body: `post body${i + 1} post body${i + 1} post body${i + 1} post body${
      i + 1
    }`,
  })),
};
