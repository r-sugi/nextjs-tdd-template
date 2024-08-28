type ListItemProps = {
	onClick: () => void;
	label: string;
};

export const MenuItem = ({ onClick, label }: ListItemProps) => {
	return (
		<div
			className="p-4 bg-white rounded-md shadow-xs"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="user-menu"
		>
			<button
				type="button"
				className="block px-6 py-2 mb-2 font-bold rounded"
				role="menuitem"
				onClick={onClick}
			>
				{label}
			</button>
		</div>
	);
};
