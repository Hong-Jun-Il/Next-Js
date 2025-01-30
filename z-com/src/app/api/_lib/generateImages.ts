import { faker } from "@faker-js/faker";

export default function generateImages() {
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
