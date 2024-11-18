const db = require("../database");

const getPosts = (req, res) => {
  let posts = db.posts;

  try {
    const { page } = req.query;

    const start = (page - 1) * 6;
    const end = start + 6;

    posts = posts.slice(start, end);

    res.status(200).json({
      message: "get posts 성공",
      posts,
    });
  } catch (error) {
    res.status(400).json({
      message: "get posts 실패",
      error,
    });
  }
};

module.exports = {
  getPosts,
};
