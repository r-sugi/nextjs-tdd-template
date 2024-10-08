/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import type { ComponentProps } from "react";

export const ulStyle = "pl-8 list-disc [&_&]:list-circle [&_&_&]:list-square";

export type UlProps = ComponentProps<"ul">;

export const Ul = (props: UlProps) => {
	const { children, className, ...rest } = props;

	return (
		<ul className={`${ulStyle} ${className ?? ""}`} {...rest}>
			{children}
		</ul>
	);
};
