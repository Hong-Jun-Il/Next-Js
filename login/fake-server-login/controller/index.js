const db = require("../database");

const onLogin = (req, res) => {
  const users = db.users;
  try {
    const { id, password } = req.body;
    console.log(req.body);
    const target = users.find((user) => user.id === id);
    if (!target) {
      throw new Error("Can't find user");
    }

    if (target.password !== password) {
      throw new Error("비밀번호 다름");
    }

    const { password: pw, ...others } = target;
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

module.exports = { onLogin, signUp };
