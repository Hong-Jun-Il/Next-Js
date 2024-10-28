module.exports = {
  posts: Array.from({ length: 54 }, (_, i) => ({
    id: i + 1,
    title: `post${i + 1}`,
    body: `post body${i + 1} post body${i + 1} post body${i + 1} post body${
      i + 1
    }`,
  })),
  schools: [
    {
      country: "캐나다",
      name: "캐나다 학교1",
      aria: "토론토",
      students: 12645,
    },
    {
      country: "캐나다",
      name: "캐나다 학교2",
      aria: "밴쿠버",
      students: 8000,
    },
    {
      country: "캐나다",
      name: "캐나다 학교3",
      aria: "몬트리올",
      students: 15000,
    },
    {
      country: "캐나다",
      name: "캐나다 학교4",
      aria: "오타와",
      students: 9000,
    },
    {
      country: "캐나다",
      name: "캐나다 학교5",
      aria: "캘거리",
      students: 11000,
    },
    {
      country: "미국",
      name: "미국 학교1",
      aria: "뉴욕",
      students: 20000,
    },
    {
      country: "미국",
      name: "미국 학교2",
      aria: "샌프란시스코",
      students: 15000,
    },
    {
      country: "미국",
      name: "미국 학교3",
      aria: "시카고",
      students: 12000,
    },
    {
      country: "한국",
      name: "한국 학교1",
      aria: "서울",
      students: 3000,
    },
    {
      country: "한국",
      name: "한국 학교2",
      aria: "부산",
      students: 4000,
    },
    {
      country: "한국",
      name: "한국 학교3",
      aria: "대구",
      students: 3500,
    },
    {
      country: "한국",
      name: "한국 학교4",
      aria: "인천",
      students: 5000,
    },
    {
      country: "영국",
      name: "영국 학교1",
      aria: "런던",
      students: 18000,
    },
    {
      country: "영국",
      name: "영국 학교2",
      aria: "맨체스터",
      students: 15000,
    },
  ],
};
