import type { PropsWithChildren } from "react";

// Layout component
export const MemberTable = ({ children }: PropsWithChildren) => {
	const tableHeaders = ["Created At", "Status Activity ID", "Status", ""];

	return (
		<table className="min-w-full bg-white border border-gray-300">
			{/* 一旦固定 */}
			<thead>
				<tr>
					{tableHeaders.map((header) => (
						<th
							key={header}
							className="py-2 px-4 bg-gray-200 border-b border-gray-300"
						>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
};
