import fetchInstance from "./BaseURL";

export default async function getAllPosts(): Promise<PostType[]> {
  try {
    const response = await fetchInstance<PostType[]>("/posts");

    return response;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`get all posts 에러 발생 ${error}`);
  }
}
