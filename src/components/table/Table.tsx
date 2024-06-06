/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import type { ComponentProps } from "react";

export type TableProps = ComponentProps<"table">;

export const Table = (props: TableProps) => {
	const { children, className, ...rest } = props;

	return (
		<div className="w-full overflow-x-auto">
			<table className={`${className ?? ""}`} {...rest}>
				{children}
			</table>
		</div>
	);
};

export type TheadProps = ComponentProps<"thead">;

export const Thead = (props: TheadProps) => {
	const { children, ...rest } = props;

	return <thead {...rest}>{children}</thead>;
};

export type TbodyProps = ComponentProps<"tbody">;

export const Tbody = (props: TbodyProps) => {
	const { children, ...rest } = props;

	return <tbody {...rest}>{children}</tbody>;
};

export type TrProps = ComponentProps<"tr">;

export const Tr = (props: TrProps) => {
	const { children, ...rest } = props;

	return <tr {...rest}>{children}</tr>;
};

const commonCellStyles =
	"border-b border-solid-grey-420 px-4 py-6 text-left text-solid-grey-900";

export const thStyle = `${commonCellStyles}`;

export type ThProps = ComponentProps<"th">;

export const Th = (props: ThProps) => {
	const { children, className, ...rest } = props;

	return (
		<th className={`${thStyle} ${className ?? ""}`} {...rest}>
			{children}
		</th>
	);
};

export const tdStyle = `${commonCellStyles}`;

export type TdProps = ComponentProps<"td">;

export const Td = (props: TdProps) => {
	const { children, className, ...rest } = props;

	return (
		<td className={`${tdStyle} ${className ?? ""}`} {...rest}>
			{children}
		</td>
	);
};
