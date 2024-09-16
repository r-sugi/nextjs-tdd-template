import { type PropsWithChildren, useState } from "react";

type Props = {
	opener: React.ReactNode;
};

export const PopupMenu = ({ opener, children }: PropsWithChildren<Props>) => {
	const [visible, setVisible] = useState(false);
	const onOpen = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<div className="relative">
			<button
				id="user-menu"
				type="button"
				aria-haspopup="true"
				onMouseDown={onOpen}
			>
				{opener}
			</button>

			{visible && (
				<div
					id="overlay"
					className="fixed inset-0 z-0 bg-transparent flex justify-center items-center"
					onClick={onClose}
				>
					<div
						id="user-menu-dropdown"
						className={`absolute z-50 bg-white right-0 w-48 mt-2 origin-top-right rounded-lg shadow-lg transform ${
							visible
								? "scale-100 opacity-100 ease-in duration-100"
								: "scale-0 opacity-0 ease-out duration-75"
						} top-13`}
					>
						{children}
					</div>
				</div>
			)}
		</div>
	);
};
