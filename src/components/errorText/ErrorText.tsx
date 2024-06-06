/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import type { ComponentProps } from "react";

export type ErrorTextProps = ComponentProps<"p">;

export const ErrorText = (props: ErrorTextProps) => {
	const { children, className, ...rest } = props;

	return (
		<p
			className={`text-[0.75rem] leading-1-7 text-error-1 ${className ?? ""}`}
			{...rest}
		>
			{children}
		</p>
	);
};
