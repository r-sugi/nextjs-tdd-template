/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import { type ComponentProps, forwardRef } from "react";

export type DialogProps = ComponentProps<"dialog">;

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
	function createDialog(props, ref) {
		const { children, className, ...rest } = props;

		return (
			<dialog
				className={`bg-transparent p-6 backdrop:bg-black/45 ${className ?? ""}`}
				onClick={(e) => {
					e.currentTarget.close();
				}}
				ref={ref}
				{...rest}
			>
				{children}
			</dialog>
		);
	},
);

export type DialogBodyProps = ComponentProps<"div">;

export const DialogBody = (props: DialogBodyProps) => {
	const { children, className, ...rest } = props;
	return (
		<div
			className={`flex flex-col items-center gap-4 rounded-xl border border-solid-grey-200 bg-white p-6 desktop:p-10 ${
				className ?? ""
			}`}
			onClick={(e) => {
				e.stopPropagation();
			}}
			{...rest}
		>
			{children}
		</div>
	);
};
