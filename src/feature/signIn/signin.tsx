import { loginRequiredPages, publicPages } from "@/const/paths";
import Link from "next/link";
import { useRouter } from "next/router";
import type { BaseSyntheticEvent, FC } from "react";
import { signIn } from "../auth";
import { useAuthContext } from "../auth/provider/AuthProvider";
import { type SignInSchema, useSignInForm } from "./hooks/form";

export default function SignInTemplate() {
	const { member } = useAuthContext();
	const router = useRouter();

	const {
		register,
		formState: { isSubmitting, isValid, errors },
		handleSubmit,
	} = useSignInForm();

	const submitHandler = async (
		data: SignInSchema,
		event?: BaseSyntheticEvent,
	) => {
		event?.preventDefault?.();
		try {
			await signIn({
				email: data.email,
				password: data.password,
			});
			await router.push(loginRequiredPages.mypage.path());
		} catch (error) {
			// TODO: 未登録のメールアドレスの場合、下記のようなエラーが発生するので、エラーハンドリングが必要
			// error.name === "FirebaseError"
			// error.code === "auth/user-not-found"
			// error.message === "Firebase: Error (auth/user-not-found)."
			// TODO: サーバーが止まっている場合、下記のようなエラーが発生するので、エラーハンドリングが必要
			// error.name === "FirebaseError"
			// error.code === 'auth/network-request-failed'
			console.error(error);
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit((data, event) => submitHandler(data, event))}
			>
				<div>サインインフォーム</div>
				<div>
					<label>メールアドレス</label>
					<input {...register("email")} />
					{errors.email?.message && <p>{errors.email.message}</p>}
				</div>
				<div>
					<label>パスワード</label>
					<input {...register("password")} />
					{errors.password?.message && <p>{errors.password.message}</p>}
				</div>
				<button type="submit" disabled={!isValid || isSubmitting}>
					送信
				</button>
			</form>
			<Link href={publicPages.signUp.path()}>サインアップ</Link>
		</div>
	);
}
