import type { ReactNode } from "react";
import ClientOnlyPortal from "../modal/clientOnlyPortal";

type IProps = {
	open: boolean;
	handleClose: () => void;
	children: ReactNode;
	isModal?: boolean;
};

export const Dialog = (props: IProps) => {
	const handleClose = () => {
		!props.isModal && props.handleClose();
	};

	return (
		props.open && (
			<ClientOnlyPortal selector="#modal">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					onClick={handleClose}
					className="fixed inset-0 backdrop-brightness-50 grid place-content-center"
				>
					{props.children}
				</div>
			</ClientOnlyPortal>
		)
	);
};

/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import type { ComponentProps } from "react";

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
