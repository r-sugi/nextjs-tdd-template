import { loginRequiredPages, publicPages } from "@/const/paths";
import Link from "next/link";
import { useRouter } from "next/router";
import type { BaseSyntheticEvent } from "react";
import { useSignIn } from "../auth/hooks/useSignIn.command";
import { type SignInSchema, useSignInForm } from "./hooks/form";

export default function SignInTemplate() {
	const router = useRouter();
	const { signIn } = useSignIn();

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
		await signIn({
			email: data.email,
			password: data.password,
		});
		await router.push(loginRequiredPages.mypage.path());
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
