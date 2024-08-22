const mockAuth = {
	currentUser: { uid: "mockedUserId", email: "mock@example.com" },
};

export const getAuth = jest.fn(() => mockAuth);

export const createUserWithEmailAndPassword = jest.fn(() => {
	return Promise.resolve({
		user: {
			uid: "mockedUserId",
			email: "mock@example.com",
		},
	});
});

export const signInWithEmailAndPassword = jest.fn(() => {
	return Promise.resolve({
		user: {
			uid: "mockedUserId",
			email: "mock@example.com",
		},
	});
});

export const signOut = jest.fn(() => {
	return Promise.resolve();
});

export const onAuthStateChanged = jest.fn((auth, callback) => {
	callback({
		uid: "mockedUserId",
		email: "mock@example.com",
	});
});
