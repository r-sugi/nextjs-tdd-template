import { type PropsWithChildren, useState } from "react";

type Props = {
	opener: React.ReactNode;
};

export const PopupMenu = ({ opener, children }: PropsWithChildren<Props>) => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);

	const handleFocus = () => {
		setDropdownVisible(true);
	};

	const handleBlur = () => {
		setDropdownVisible(false);
	};

	return (
		<nav className="flex items-center justify-between h-full p-3 m-auto">
			<div className="relative">
				<button
					id="user-menu"
					type="button"
					aria-haspopup="true"
					onFocus={handleFocus}
					onBlur={handleBlur}
				>
					{opener}
				</button>

				<div
					id="user-menu-dropdown"
					className={`z-10 absolute right-0 w-48 mt-2 origin-top-right rounded-lg shadow-lg transform ${
						isDropdownVisible
							? "scale-100 opacity-100 ease-in duration-100"
							: "scale-0 opacity-0 ease-out duration-75"
					} top-13`}
				>
					{children}
				</div>
			</div>
		</nav>
	);
};
