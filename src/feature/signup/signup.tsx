import { publicPages } from "@/const/paths";
import Link from "next/link";
import type { BaseSyntheticEvent, FC } from "react";
import { signUp } from "../auth";
import { type SignUpSchema, useSignUpForm } from "./hooks/form";

export const SignUpTemplate: FC = () => {
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
			// TODO: Handle error
			console.error(error);
		}
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
};
