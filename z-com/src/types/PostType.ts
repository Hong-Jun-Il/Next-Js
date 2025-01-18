export type PostType = {
  postId: number;
  User: {
    id: string;
    nickname: string;
    image: string;
  };
  content: string;
  createdAt: string;
  Images:
    | null
    | {
        imageId: number;
        link: string;
      }[];
};
