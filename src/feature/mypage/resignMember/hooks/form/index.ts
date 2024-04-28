import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, infer as ZodInfer } from "zod";

import { reasonType, reasonDetail, agreement } from "./validation";

export const resignMemberSchema = z.object({
  reasonType: reasonType(),
  reasonDetail: reasonDetail(),
  agreement: agreement(),
});

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
  };
};
