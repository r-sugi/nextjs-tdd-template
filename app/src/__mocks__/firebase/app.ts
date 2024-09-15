export const initializeApp = jest.fn(() => ({
	name: "mockedAppName",
}));

export const getApp = jest.fn(() => ({
	name: "mockedAppName",
}));

export const getApps = jest.fn(() => [{ name: "mockedAppName" }]);

export const deleteApp = jest.fn(() => Promise.resolve());

export const FirebaseApp = jest.fn();
