import { faker } from "@faker-js/faker";

export default function generateDate() {
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: new Date(),
  });
}
