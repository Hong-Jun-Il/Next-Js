const db = require("../database");

const getPosts = (req, res) => {
  const posts = db.posts;

  try {
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

function test(country) {
  if (country === "캐나다") {
    return "canada";
  }
  return country;
}

const getSchools = (req, res) => {
  let schools = db.schools;
  const { country, aria } = req.query;

  if (country) {
    schools = schools.filter((school) => test(school.country) === country);
  }

  console.log(schools);

  if (aria !== "undefined") {
    schools = schools.filter((school) => school.aria === aria);
  }

  console.log(schools);

  try {
    res.status(200).json({
      message: "get schools 성공",
      schools,
    });
  } catch (error) {
    res.status(400).json({
      message: "get schools 실패",
      error,
    });
  }
};

module.exports = {
  getPosts,
  getSchools,
};
