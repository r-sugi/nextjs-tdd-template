import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type infer as ZodInfer, z } from "zod";

import { email, password } from "./validation";

const signInSchema = z.object({
	email: email(),
	password: password(),
});

export type SignInSchema = ZodInfer<typeof signInSchema>;

type Props = {
	defaultValues?: SignInSchema;
};

export const useSignInForm = (props?: Props) => {
	const { handleSubmit, register, formState, setError } = useForm({
		resolver: zodResolver(signInSchema),
		shouldFocusError: true,
		mode: "onBlur",
		defaultValues: props?.defaultValues ?? {
			email: "",
			password: "",
		},
	});

	return {
		handleSubmit,
		register,
		formState,
		setError,
	};
};
