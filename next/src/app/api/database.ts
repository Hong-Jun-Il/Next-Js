export const database = Array.from({ length: 3 }, (_, i) => ({
  id: `user${i + 1}`,
  password: `user${i + 1}@${i + 1}`,
  age: (i + 1) * 10,
}));
