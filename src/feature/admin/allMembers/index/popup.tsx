import { type PropsWithChildren, useState } from "react";

export const PopupMenu = ({ children }: PropsWithChildren) => {
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
					{children}
				</button>

				<div
					id="user-menu-dropdown"
					className={`z-10 absolute right-0 w-48 mt-2 origin-top-right rounded-lg shadow-lg transform ${
						isDropdownVisible
							? "scale-100 opacity-100 ease-in duration-100"
							: "scale-0 opacity-0 ease-out duration-75"
					} top-13`}
				>
					<div
						className="p-4 bg-white rounded-md shadow-xs"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu"
					>
						<div
							className="block px-6 py-2 mb-2 font-bold rounded"
							role="menuitem"
						>
							Delete
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
