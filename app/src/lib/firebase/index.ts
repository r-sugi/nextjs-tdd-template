import {
	NEXT_PUBLIC_FIREBASE_API_KEY,
	NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	NEXT_PUBLIC_FIREBASE_PROJECT_ID,
} from "@/config/env";
import { getApp, getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const config = {
	apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};
const initializeEmulator = () => {
	// ローカルで実行中の場合は、エミュレータを使う
	const isEmulating = process.env.NODE_ENV === "development";
	if (isEmulating) {
		const auth = getAuth();
		const functions = getFunctions(getApp());
		const db = getFirestore();
		connectAuthEmulator(auth, "http://localhost:9099");
		connectFunctionsEmulator(functions, "localhost", 5001);
		connectFirestoreEmulator(db, "localhost", 5002);
	}
};

export const initializeFirebaseApp = () => {
	!getApps().length ? initializeApp(config) : getApp();
	initializeEmulator();
};
