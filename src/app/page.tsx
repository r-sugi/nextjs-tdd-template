"use client";
import { publicPages } from "@/const/paths";
// import { IndexTemplate } from "@/feature/mypage/index/index";
// import { Seo } from "@/pages/_seo/Seo";
import { Metadata } from "next/types";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

export default function Index() {
  const router = useRouter();

  // FIXME: 挙動に関する確認
  // FIXME: 関数に切り出したい。型でset, getのkey,valueをある程度担保する
  function setStateToCurrentPage() {
    // urlを指定して履歴スタックにstateを追加する
    window.history.pushState({ foo: "foo desu2" }, "", `/`);
  }
  function getStateFromCurrentPage() {
    // ブラウザリロードしても値が取得できる(履歴スタックから値を取得できる)
    // 履歴スタックからstateを追加する(stateをpushした履歴スタックなら値を取得できる)
    // 例1: '/'でstateにセットする + router.push('/mypage')する => '/mypage'でrouter.push('/')すると新規スタックの'/'に遷移する(値を取得できない)
    // 例2: '/'でstateにセットする + router.push('/mypage')する => router.back()すると履歴スタックの'/'に戻る(値を取得できる)
    // 例3: '/'でstateにセットする + router.push('/mypage')する => router.go(-1)すると履歴スタックの'/'に戻る(値を取得できる)
    return window.history.state["foo"];
  }
  function push() {
    router.push("/mypage");
  }

  return (
    <>
      {/* <Seo
        title={publicPages.index.title()}
        description={publicPages.index.description()}
        path={publicPages.index.path()}
      /> */}
      {/* <IndexTemplate /> */}
      トップページです！
      <br />
      <button onClick={setStateToCurrentPage}>set state to current page</button>
      <br />
      <button onClick={() => window.alert(getStateFromCurrentPage())}>
        show state from current page
      </button>
      <br />
      <br />
      <button onClick={push}>go to /mypage</button>
      <br />
      <Link href={`/mypage`}>test link to /mypage</Link>
    </>
  );
}
