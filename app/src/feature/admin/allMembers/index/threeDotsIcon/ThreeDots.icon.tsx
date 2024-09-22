import type { FC } from "react";

export const ThreeDotsIcon: FC = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			className="w-6 h-6 text-gray-600"
			role="img"
			aria-labelledby="vertical-dots-title"
		>
			<title id="vertical-dots-title">Vertical three dots icon</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M12 6v.01M12 12v.01M12 18v.01"
			/>
		</svg>
	);
};
