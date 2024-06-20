import { loginRequiredPages, publicPages } from "@/const/paths";
import Link from "next/link";
import { useRouter } from "next/router";
import type { BaseSyntheticEvent } from "react";
import { useSignUp } from "../auth/hooks/useSignUp.command";
import { type SignUpSchema, useSignUpForm } from "./hooks/form";

export default function SignUpTemplate() {
	const router = useRouter();
	const { signUp } = useSignUp();

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
		await signUp({
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
}
