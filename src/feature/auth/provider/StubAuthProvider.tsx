import type { ReactNode } from "react";

import { stubAuthContext } from "mocks/fixtures/provider/useStubAuthContext";

import { AuthContext, type GlobalAuthState } from "./AuthProvider";

type Props = {
	value: GlobalAuthState;
	children: ReactNode;
};

/**
 *
 * @param {Props} props
 * @returns
 */
export function StubAuthProvider(props: Props) {
	return (
		<AuthContext.Provider value={props.value}>
			{props.children}
		</AuthContext.Provider>
	);
}
