import type { ReactNode } from "react";

import type { ClientError } from "@/error/errors/clientError";

type Props = {
	error: ClientError;
	onReset: () => void;
};
// TODO: 名前を変える
export const PostIdErrorScreen = ({ error, onReset }: Props): ReactNode => {
	return (
		<div>
			<h1>PostIdErrorScreen</h1>
			<p>code: {error.code}</p>
			<p>message: {error.message}</p>
			<button type="button" onClick={onReset}>
				reset
			</button>
		</div>
	);
};
