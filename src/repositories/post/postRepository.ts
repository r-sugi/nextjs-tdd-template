import { Post } from "__fixtures__/posts/post.type";
import { apiClient } from "@/lib/apiClient";
import useSWR from "swr";

export const fetchPostById = async (id: string) => {
  return await apiClient<Post>(`/api/posts/${id}`);
};

export const fetchPosts = async () => {
  return await apiClient<Post[]>(`/api/posts`);
};

export const useFetchPostById = (id: string | number) => {
  const {
    data: post,
    error,
    isLoading,
  } = useSWR(`/api/posts/${id}`, apiClient<Post>);

  return {
    post,
    error,
    isLoading,
  };
};

export const useFetchPosts = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(`/api/posts`, apiClient<Post>);

  return {
    posts,
    error,
    isLoading,
  };
};
