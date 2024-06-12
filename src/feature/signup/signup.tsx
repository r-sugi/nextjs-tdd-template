import { loginRequiredPages, publicPages } from "@/const/paths";
import Link from "next/link";
import { useRouter } from "next/router";
import type { BaseSyntheticEvent, FC } from "react";
import { signUp } from "../auth";
import { useAuthContext } from "../auth/provider/AuthProvider";
import { type SignUpSchema, useSignUpForm } from "./hooks/form";

export const SignUpTemplate: FC = () => {
	const { member } = useAuthContext();
	const router = useRouter();

	const {
		register,
		formState: { isSubmitting, isValid, errors },
		handleSubmit,
	} = useSignUpForm();

	const submitHandler = async (
		data: SignUpSchema,
		event?: BaseSyntheticEvent,
	) => {
		event?.preventDefault?.();

		try {
			await signUp({
				email: data.email,
				password: data.password,
			});
		} catch (error) {
			// TODO: 重複メールアドレスの場合、下記のようなエラーが発生するので、エラーハンドリングが必要
			// error.name === "FirebaseError"
			// error.code === "auth/email-already-in-use"
			// error.message === "Firebase: Error (auth/email-already-in-use)."
			// TODO: サーバーが止まっている場合、下記のようなエラーが発生するので、エラーハンドリングが必要
			// error.name === "FirebaseError"
			// error.code === 'auth/network-request-failed'
			console.error(error);
		}
	};

	if (member) {
		router.push(loginRequiredPages.mypage.path());
		return <>redirecting</>;
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit((data, event) => submitHandler(data, event))}
			>
				<div>サインアップフォーム</div>
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
			<Link href={publicPages.signIn.path()}>サインイン</Link>
		</div>
	);
};
