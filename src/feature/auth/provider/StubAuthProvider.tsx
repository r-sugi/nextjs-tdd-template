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
	const state = stubAuthContext.signedIn;
	return (
		<AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
	);
}
