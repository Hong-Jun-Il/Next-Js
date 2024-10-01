const db = require("../database");

const onLogin = (req, res) => {
  const users = db.users;
  try {
    const { id, pw } = req.body;
    const target = users.find((user) => user.id === id);
    if (target === -1) {
      throw new Error("Can't find user");
    }

    if (target.pw !== pw) {
      throw new Error("비밀번호 다름");
    }

    res.status(200).json({
      id: target.id,
      name: target.name,
    });
  } catch (error) {
    res.status(400).json({
      message: "로그인 실패",
      error,
    });
  }
};

module.exports = { onLogin };
