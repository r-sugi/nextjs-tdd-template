import { Button } from "@/components";

type ListItemProps = {
	onClick: () => void;
	label: string;
};

export const MenuItem = ({ onClick, label }: ListItemProps) => {
	return (
		<button
			type="button"
			className="p-4 bg-white rounded-md shadow-xs"
			aria-orientation="vertical"
			aria-labelledby="user-menu"
			onClick={() => onClick()}
		>
			<div className="block px-6 py-2 mb-2 font-bold rounded" role="menuitem">
				{label}
			</div>
		</button>
	);
};
