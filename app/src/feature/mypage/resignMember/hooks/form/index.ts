import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type infer as ZodInfer, type ZodSchema, z } from "zod";

import { agreement, reasonDetail, reasonType } from "./validation";

type SchemaKey = "reasonType" | "reasonDetail" | "agreement";

const resignMemberLabels = {
	reasonType: "退会理由",
	reasonDetail: "詳細",
	agreement: "同意する",
} as const satisfies Record<SchemaKey, string>;

const resignMemberSchema = z.object({
	reasonType: reasonType(),
	reasonDetail: reasonDetail(),
	agreement: agreement(),
} satisfies Record<SchemaKey, ZodSchema>);

export type ResignMemberSchema = ZodInfer<typeof resignMemberSchema>;

type Props = {
	defaultValues?: ResignMemberSchema;
};

export const useResignMemberForm = (props?: Props) => {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting, isValid, errors },
		setError,
	} = useForm({
		resolver: zodResolver(resignMemberSchema),
		shouldFocusError: true,
		mode: "onChange",
		defaultValues: props?.defaultValues ?? {
			reasonType: "",
			reasonDetail: "",
			agreement: false,
		},
	});

	return {
		handleSubmit,
		register,
		formState: { isSubmitting, isValid, errors },
		setError,
		resignMemberLabels,
	};
};
