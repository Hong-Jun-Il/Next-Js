const db = require("../database");

const onLogin = (req, res) => {
  const users = db.users;
  try {
    const { id, password } = req.body;
    const target = users.find((user) => user.id === id);
    if (!target) {
      throw new Error("아이디를 확인해주셈");
    }

    if (target.password !== password) {
      throw new Error("비밀번호 다름");
    }

    const { password: pw, ...others } = target;
    console.log(others);
    res.status(200).json(others);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const signUp = (req, res) => {
  const users = db.users;
  try {
    const newUser = req.body;
    users.push(newUser);
    console.log(users);
    const { password, ...others } = newUser;
    res.status(200).json({
      message: "성공",
      user: others,
    });
  } catch (error) {
    res.status(400).json({
      message: "회원가입 실패",
      error,
    });
  }
};

const getPosts = (req, res) => {
  const posts = db.posts;
  const limit = 5;

  try {
    const { page } = req.query;

    const start = (page - 1) * limit;
    const end = start + limit;

    const data = posts.slice(start, end);

    res.status(200).json({
      message: "get posts 성공",
      posts: data,
      totalPages: Math.ceil(posts.length / limit),
    });
  } catch (error) {
    res.status(400).json({
      message: "게시물 조회 실패",
      error,
    });
  }
};

module.exports = { onLogin, signUp, getPosts };
