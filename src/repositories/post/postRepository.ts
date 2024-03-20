import { Post } from "__fixtures__/posts/post.type";
import { apiClient } from "@/lib/apiClient";

export const fetchPostById = async (id: string) => {
  return await apiClient<Post>(`/api/posts/${id}`);
};

export const fetchPosts = async () => {
  return await apiClient<Post[]>(`/api/posts`);
};
