import { Post } from "__fixtures__/posts/post.type";
import { apiClient } from "@/lib/apiClient";
import useSWR from "swr";

// export const fetchPostById = async (id: string) => {
//   return await apiClient<Post>(`/posts/${id}`);
// };

// export const fetchPosts = async () => {
//   return await apiClient<Post[]>(`/posts`);
// };

// export const useFetchPostById = (id: string | number) => {
//   const {
//     data: res,
//     error,
//     isLoading,
//   } = useSWR(`/posts/${id}`, apiClient<Post>);

//   return {
//     post: res?.data,
//     error,
//     isLoading,
//   };
// };

// export const useFetchPosts = () => {
//   const { data: res, error, isLoading } = useSWR(`/posts`, apiClient<Post[]>);

//   return {
//     posts: res?.data,
//     error,
//     isLoading,
//   };
// };
