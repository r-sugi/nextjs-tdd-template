import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type infer as ZodInfer, z } from "zod";

import { email, password } from "./validation";

const signUpSchema = z.object({
	email: email(),
	password: password(),
});

export type SignUpSchema = ZodInfer<typeof signUpSchema>;

type Props = {
	defaultValues?: SignUpSchema;
};

export const useSignUpForm = (props?: Props) => {
	const { handleSubmit, register, formState, setError } = useForm({
		resolver: zodResolver(signUpSchema),
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
