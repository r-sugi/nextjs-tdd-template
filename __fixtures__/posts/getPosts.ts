import { Post } from "./post.type";

export const success: { data: Post[] } = {
  data: [
    { id: 1, title: "title1", body: "body1" },
    { id: 2, title: "title2", body: "body2" },
    { id: 3, title: "title3", body: "body3" },
  ],
};
