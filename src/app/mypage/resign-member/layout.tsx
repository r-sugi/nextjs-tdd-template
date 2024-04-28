import { Metadata } from "next";

export function generateMetadata(): Metadata {
  // TODO: ここでseo関数を呼び出す
  return {
    title: "mypage index title",
    description: "mypage index description",
  };
}

// error if export default function does not exists
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
