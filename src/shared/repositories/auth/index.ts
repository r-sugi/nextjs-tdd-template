import type { AppErrorMessage } from "@/error/const";
import {
	createUserWithEmailAndPassword,
	signOut as firebaseSignOut,
	getAuth,
	sendEmailVerification,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { transformError } from "./transformError";

export type SignUpProps = {
	email: string;
	password: string;
};

type ResultType = { data: boolean | null; error: AppErrorMessage | null };

export const signUp = async (signUpProps: SignUpProps): Promise<ResultType> => {
	try {
		const auth = getAuth();
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			signUpProps.email,
			signUpProps.password,
		);
		await sendEmailVerification(userCredential.user);
		return { data: true, error: null };
	} catch (error) {
		return { data: null, error: transformError(error) };
	}
};

export type SignInProps = {
	email: string;
	password: string;
};

export const signIn = async (signInProps: SignInProps): Promise<ResultType> => {
	try {
		const auth = getAuth();
		await signInWithEmailAndPassword(
			auth,
			signInProps.email,
			signInProps.password,
		);
		return { data: true, error: null };
	} catch (error) {
		return { data: null, error: transformError(error) };
	}
};

export const signOut = async (): Promise<ResultType> => {
	try {
		const auth = getAuth();
		await firebaseSignOut(auth);
		return { data: true, error: null };
	} catch (error) {
		return { data: null, error: transformError(error) };
	}
};
