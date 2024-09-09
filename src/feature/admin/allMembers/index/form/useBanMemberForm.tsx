import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type infer as ZodInfer, type ZodSchema, z } from "zod";

type SchemaKey = "reason";

const banReason = () =>
	z
		.string()
		.min(1, "必須です") // 1文字以上を強制することで必須項目にできる
		.max(50, "50文字以内で入力してください");

export const banMemberLabels = {
	reason: "理由",
} as const satisfies Record<SchemaKey, string>;

const banMemberSchema = z.object({
	reason: banReason(),
} satisfies Record<SchemaKey, ZodSchema>);

export type BanMemberSchema = ZodInfer<typeof banMemberSchema>;

type Props = {
	defaultValues?: BanMemberSchema;
};

export const useBanMemberForm = (props?: Props) => {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting, isValid, errors },
		setError,
		reset,
	} = useForm({
		resolver: zodResolver(banMemberSchema),
		shouldFocusError: true,
		mode: "onChange",
		defaultValues: props?.defaultValues ?? {
			reason: "",
		},
	});

	return {
		handleSubmit,
		register,
		formState: { isSubmitting, isValid, errors },
		setError,
		reset,
		banMemberLabels,
	};
};
