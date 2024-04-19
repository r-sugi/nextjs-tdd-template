import { z, infer as ZodInfer } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reasonType, reasonDetail, agreement } from "./validation";

export const resignMemberSchema = z.object({
  reasonType: reasonType(),
  reasonDetail: reasonDetail(),
  agreement: agreement(),
});

export type ResignMemberSchema = ZodInfer<typeof resignMemberSchema>;

export const useResignMemberForm = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid, errors },
    setError,
  } = useForm({
    resolver: zodResolver(resignMemberSchema),
    shouldFocusError: true,
    mode: "onChange",
    defaultValues: {
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
