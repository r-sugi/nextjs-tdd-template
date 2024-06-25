import type { AppErrorMessage } from "@/error/const";
import { transformClientAuthError } from "@/error/transform/auth/transform";
import {
	createUserWithEmailAndPassword,
	signOut as firebaseSignOut,
	getAuth,
	sendEmailVerification,
	signInWithEmailAndPassword,
} from "firebase/auth";

type SignUpProps = {
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
		return { data: null, error: transformClientAuthError(error) };
	}
};

type SignInProps = {
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
		return { data: null, error: transformClientAuthError(error) };
	}
};

export const signOut = async (): Promise<ResultType> => {
	try {
		const auth = getAuth();
		await firebaseSignOut(auth);
		return { data: true, error: null };
	} catch (error) {
		return { data: null, error: transformClientAuthError(error) };
	}
};
