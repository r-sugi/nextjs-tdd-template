import { FirebaseError } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	signOut as firebaseSignOut,
	getAuth,
	sendEmailVerification,
	signInWithEmailAndPassword,
} from "firebase/auth";

type SignUp = {
	email: string;
	password: string;
};
export const signUp = async (signUpProps: SignUp) => {
	try {
		const auth = getAuth();
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			signUpProps.email,
			signUpProps.password,
		);
		await sendEmailVerification(userCredential.user);
	} catch (e) {
		if (e instanceof FirebaseError) {
			// TODO: Handle error
			console.log(e);
		}
	}
};

type SignInProps = {
	email: string;
	password: string;
};
export const signIn = async (signInProps: SignInProps) => {
	try {
		const auth = getAuth();
		await signInWithEmailAndPassword(
			auth,
			signInProps.email,
			signInProps.password,
		);
	} catch (e) {
		if (e instanceof FirebaseError) {
			// TODO: Handle error
			console.log(e);
		}
	}
};

export const signOut = async () => {
	try {
		const auth = getAuth();
		await firebaseSignOut(auth);
		return true;
	} catch (e) {
		if (e instanceof FirebaseError) {
			// TODO: Handle error
			console.log(e);
		}
	}
};
