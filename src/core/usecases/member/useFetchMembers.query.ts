import {
	type Dispatch,
	type SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";

import type { MembersByType } from "@/core/domains/member/member";
import { type MemberStatus, memberStatus } from "@/core/domains/member/status";
import { apolloQueryErrorHandler } from "@/core/repositories/apolloQueryErrorHandler";
import { useFetchMembersByStatus } from "@/core/repositories/member/members.repository";
import { ApolloError, type GraphQLErrors } from "@apollo/client/errors";

type Props = {
	status?: MemberStatus;
};
type UsecaseLoading = {
	data: {
		members: null;
		queryMemberStatus: MemberStatus;
	};
	error: GraphQLErrors | null;
	loading: true;
	refetch: Dispatch<SetStateAction<MemberStatus>>;
} & Record<string, unknown>;

type UsecaseLoaded<T> = {
	data: {
		members: T;
		queryMemberStatus: MemberStatus;
	};
	error: GraphQLErrors | null;
	loading: false;
	refetch: Dispatch<SetStateAction<MemberStatus>>;
} & Record<string, unknown>;

type Usecase<T> = UsecaseLoading | UsecaseLoaded<T>;

export const useFetchMembers = (props?: Props): Usecase<MembersByType> => {
	const [queryMemberStatus, setQueryMemberStatus] = useState<MemberStatus>(
		props?.status ?? memberStatus.pendingActivation,
	);
	const [members, setMembers] = useState<MembersByType | null>(null);
	const [error, setError] = useState<GraphQLErrors | null>(null);

	const query = useFetchMembersByStatus();

	// チラつき防止
	const ref = useRef(error);
	useEffect(() => {
		ref.current = error;
	}, [error]);

	useEffect(() => {
		(async () => {
			try {
				const res = await query(queryMemberStatus);
				setMembers(res);
			} catch (error: unknown) {
				if (error instanceof ApolloError) {
					setError(apolloQueryErrorHandler(error));
				}
			}
		})();
	}, [queryMemberStatus, query]);

	return {
		data: {
			members,
			queryMemberStatus,
		},
		error,
		loading: members === null,
		refetch: setQueryMemberStatus,
	} as Usecase<MembersByType>;
};
